import EditorLoader from "@/components/EditorLoader";
import React, { lazy, Suspense } from "react";

const CodeEditor = lazy(() => import("@/components/CodeEditor"));

export default async function page({
  params,
}: {
  params: {
    projectId: string;
  };
}) {
  const { projectId } = await params;
  console.log(projectId);
  return (
    <>
      <Suspense fallback={<EditorLoader />}>
        <CodeEditor projectId={projectId} />
      </Suspense>
    </>
  );
}
