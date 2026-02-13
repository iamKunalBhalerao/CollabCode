"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { LanguageChoiceCard } from "./LanguageChoiceCard";
import { ChangeEvent, useState } from "react";
import { SignUpFormData } from "@/types/types";
import { useRouter } from "next/navigation";
import apiClient from "@/lib/axios";
import axios from "axios";

export default function CreateProject() {
  const [language, setLanguage] = useState<string>("JavaScript");

  const router = useRouter();
  const [formData, setFormData] = useState<{ name: string }>({
    name: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { data } = await apiClient.post(`/project/create`, formData, {
        withCredentials: true,
      });
      if (!data.success) {
        throw new Error(data.message || "Failed to create project!");
      }

      console.log(data);

      setLoading(false);
      router.push(`/playground/${data.project.id}`);
      router.refresh();
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        // Accessing the error message sent from the backend response body
        const backendMessage =
          err.response?.data?.message || err.response?.data?.error;
        setError(backendMessage || "Server error occurred");
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative z-10 grid grid-rows-[auto_1fr] px-4">
      <div className="m-auto w-full max-w-sm">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-medium">Create Project</h1>
          <p className="text-muted-foreground mt-2 text-sm">
            Enter your Project Name
          </p>
        </div>
        <Card variant="outline" className="mt-6 p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-3">
              <Label htmlFor="projectName" className="text-sm">
                Project Name
              </Label>
              <Input
                type="text"
                id="projectName"
                name="projectName"
                placeholder="My Awesome Project"
                required
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setFormData({ ...formData, name: e.target.value });
                }}
              />
            </div>

            <LanguageChoiceCard setLanguage={setLanguage} />

            {error && (
              <p className="text-sm text-red-600 mt-2 text-center">{error}</p>
            )}

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Creating..." : "Create Project"}
            </Button>
          </form>
        </Card>

        <p className="text-muted-foreground mt-6 text-center text-sm">
          Join any Project?{" "}
          <Link
            href="/project/join-project"
            className="text-primary font-medium hover:underline"
          >
            Join Project
          </Link>
        </p>
      </div>
    </section>
  );
}
