import { type Request } from "express";

export interface createProjectInterface {
  name: string;
}

export interface updateProjectInterface {
  name?: string;
}

export type createProjectRequest = Request<{}, {}, createProjectInterface>;
export type updateProjectRequest = Request<
  { projectId: string },
  {},
  updateProjectInterface
>;
export type deleteProjectRequest = Request<{ projectId: string }, {}, {}>;
export type getProjectRequest = Request<{ projectId: string }, {}, {}>;
