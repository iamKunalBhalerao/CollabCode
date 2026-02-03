import { type Request } from "express";

export interface createProjectInterface {
  title: string;
  description?: string;
}

export interface updateProjectInterface {
  title?: string;
  description?: string;
}

export type createProjectRequest = Request<{}, {}, createProjectInterface>;
export type updateProjectRequest = Request<
  { projectId: string },
  {},
  updateProjectInterface
>;
export type deleteProjectRequest = Request<{ projectId: string }, {}, {}>;
export type getProjectRequest = Request<{ projectId: string }, {}, {}>;
