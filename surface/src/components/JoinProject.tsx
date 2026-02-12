import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function JoinProject() {
  return (
    <section className="relative z-10 grid grid-rows-[auto_1fr] px-4">
      <div className="m-auto w-full max-w-sm">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-medium">Join Project</h1>
          <p className="text-muted-foreground mt-2 text-sm">
            Enter your Project Slug
          </p>
        </div>
        <Card variant="outline" className="mt-6 p-8">
          <form action="" className="space-y-5">
            <div className="space-y-3">
              <Label htmlFor="projectSlug" className="text-sm">
                Project Slug
              </Label>
              <Input
                type="text"
                id="projectSlug"
                name="projectSlug"
                placeholder="my-awesome-project"
                required
              />
            </div>

            <Button className="w-full">Join Project</Button>
          </form>
        </Card>

        <p className="text-muted-foreground mt-6 text-center text-sm">
          Create Project?{" "}
          <Link href="/project/create-project" className="text-primary font-medium hover:underline">
            Create Project
          </Link>
        </p>
      </div>
    </section>
  );
}
