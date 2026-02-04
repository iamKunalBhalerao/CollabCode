"use client";
import * as Y from "yjs";
import * as monaco from "monaco-editor";
import { createYjsDoc } from "@/yjs/doc";
import { MonacoBinding } from "y-monaco";
import { WebsocketProvider } from "y-websocket";
import { EditorHeader } from "@/components/EditorHeader";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";

export default function ProjectEditor() {
  const { projectId } = useParams<{ projectId: string }>();
  const containerRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const configMapRef = useRef<Y.Map<string | unknown> | null>(null);
  const initializedRef = useRef(false);

  const [language, setLanguage] = useState("typescript");
  const [status, setStatus] = useState<
    "connecting" | "connected" | "disconnected"
  >("connecting");

  useEffect(() => {
    if (!projectId || !containerRef.current) return;

    const { ydoc, ytext } = createYjsDoc();

    const provider = new WebsocketProvider(
      "ws://localhost:5000",
      projectId,
      ydoc,
    );

    provider.on("status", (event: { status: string }) => {
      setStatus(event.status as "connecting" | "connected" | "disconnected");
      if (event.status === "connected") {
        provider.ws?.send(
          JSON.stringify({
            type: "join",
            room: projectId,
          }),
        );
      }
    });

    const editor = monaco.editor.create(containerRef.current, {
      value: ytext.toString(),
      language: language,
      theme: "vs-dark",
      automaticLayout: true,
      fontSize: 14,
      fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
      minimap: { enabled: true },
      padding: { top: 20 },
      cursorSmoothCaretAnimation: "on",
      cursorBlinking: "smooth",
      smoothScrolling: true,
      lineNumbers: "on",
      roundedSelection: true,
      scrollBeyondLastLine: false,
      readOnly: false,
      scrollbar: {
        vertical: "visible",
        horizontal: "visible",
        useShadows: false,
        verticalHasArrows: false,
        horizontalHasArrows: false,
        verticalScrollbarSize: 10,
        horizontalScrollbarSize: 10,
      },
      bracketPairColorization: {
        enabled: true,
      },
    });

    editorRef.current = editor;

    new MonacoBinding(
      ytext,
      /** @ts-expect-error typeerror */
      editor.getModel(),
      new Set([editor]),
      provider.awareness,
    );

    const sharedConfig = ydoc.getMap("config");
    configMapRef.current = sharedConfig;

    sharedConfig.observe((event) => {
      if (event.keysChanged.has("language")) {
        const newLang = sharedConfig.get("language") as string;
        if (newLang) setLanguage(newLang);
      }
    });

    // Set initial language if not present
    if (!sharedConfig.has("language")) {
      sharedConfig.set("language", "typescript");
    } else if (!initializedRef.current) {
      initializedRef.current = true;
      // Schedule setLanguage asynchronously to avoid cascading renders
      setTimeout(() => {
        setLanguage(sharedConfig.get("language") as string);
      }, 0);
    }

    return () => {
      editor.dispose();
      provider.destroy();
      ydoc.destroy();
    };
  }, [projectId]);

  // Update language when state changes
  useEffect(() => {
    if (editorRef.current) {
      const model = editorRef.current.getModel();
      if (model) {
        monaco.editor.setModelLanguage(model, language);
      }
    }
  }, [language]);

  return (
    <div className="flex flex-col h-screen w-full bg-[#1e1e1e] overflow-hidden">
      <EditorHeader
        projectId={projectId}
        language={language}
        setLanguage={(newLang) => {
          setLanguage(newLang);
          configMapRef.current?.set("language", newLang);
        }}
        status={status}
      />
      <div className="flex-1 flex flex-col relative overflow-hidden">
        <div className="flex-1 relative">
          <div ref={containerRef} className="h-full w-full" />
        </div>
      </div>
    </div>
  );
}
