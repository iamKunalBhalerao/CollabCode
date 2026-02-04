import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ProjectInfoProps {
  projectId: string;
}

// Mock project data - replace with actual API call
const getProjectData = (projectId: string) => {
  // This would be replaced with actual data fetching
  const mockProjects: Record<
    string,
    {
      name: string;
      description: string;
      language: string;
      lastModified: string;
      collaborators: number;
      files: { name: string; type: string }[];
    }
  > = {
    "1": {
      name: "E-commerce App",
      description: "A full-stack e-commerce application",
      language: "TypeScript",
      lastModified: "2 hours ago",
      collaborators: 3,
      files: [
        { name: "package.json", type: "config" },
        { name: "src/index.ts", type: "source" },
        { name: "src/components/", type: "folder" },
      ],
    },
    "2": {
      name: "API Server",
      description: "RESTful API backend service",
      language: "JavaScript",
      lastModified: "1 day ago",
      collaborators: 2,
      files: [
        { name: "server.js", type: "source" },
        { name: "routes/", type: "folder" },
        { name: "models/", type: "folder" },
      ],
    },
    "3": {
      name: "API Server",
      description: "RESTful API backend service",
      language: "JavaScript",
      lastModified: "1 day ago",
      collaborators: 2,
      files: [
        { name: "server.js", type: "source" },
        { name: "routes/", type: "folder" },
        { name: "models/", type: "folder" },
      ],
    },
  };

  return mockProjects[projectId] || null;
};

export function ProjectInfo({ projectId }: ProjectInfoProps) {
  const project = getProjectData(projectId);

  if (!project) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-muted-foreground">Project not found</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Project Header */}
      <div>
        <h1 className="text-3xl font-bold">{project.name}</h1>
        <p className="text-muted-foreground mt-1">{project.description}</p>
      </div>

      {/* Project Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Language</CardDescription>
            <CardTitle className="text-xl">{project.language}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Collaborators</CardDescription>
            <CardTitle className="text-xl">{project.collaborators}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Last Modified</CardDescription>
            <CardTitle className="text-xl">{project.lastModified}</CardTitle>
          </CardHeader>
        </Card>
      </div>

      {/* Project Files */}
      <Card>
        <CardHeader>
          <CardTitle>Project Files</CardTitle>
          <CardDescription>Recent files in this project</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {project.files.map((file, index) => (
              <li
                key={index}
                className="flex items-center gap-2 p-2 rounded-md hover:bg-muted/50 cursor-pointer"
              >
                <span className="text-sm font-mono">{file.name}</span>
                <span className="text-xs text-muted-foreground ml-auto">
                  {file.type}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
