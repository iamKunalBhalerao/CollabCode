import {
  createCollaborationForOwner,
  createProject,
  deleteProject,
  getProject,
  getProjectsByOwner,
  updateProject,
} from "../dao/project.dao";
import { BadRequestError } from "../errors/errors";
import type {
  createProjectInterface,
  updateProjectInterface,
} from "../types/project.types";
import { createProjectZodSchema } from "../types/zod.types";

export const createProjectService = async (
  data: createProjectInterface,
  ownerId: string,
) => {
  const parsedData = createProjectZodSchema.safeParse(data);
  if (!parsedData.success) throw new BadRequestError("Invalid Credentials!");
  const { name } = parsedData.data;

  const project = await createProject({ name }, ownerId);
  if (!project) throw new BadRequestError("Failed to create project!");

  const projectId = project.id as string;
  await createCollaborationForOwner(projectId, ownerId);

  return project;
};

export const getProjectService = async (projectId: string, ownerId: string) => {
  const project = await getProject(projectId, ownerId);
  if (!project) throw new BadRequestError("Failed to fetch project!");

  return project;
};

export const updateProjectService = async (
  projectId: string,
  data: updateProjectInterface,
  ownerId: string,
) => {
  const parsedData = createProjectZodSchema.safeParse(data);
  if (!parsedData.success) {
    throw new BadRequestError("Invalid Credentials!");
  }
  const { name } = parsedData.data;

  const project = await updateProject(projectId, { name }, ownerId);
  if (!project) throw new BadRequestError("Failed to update project!");

  return project;
};

export const deleteProjectService = async (
  projectId: string,
  ownerId: string,
) => {
  const isDeleted = await deleteProject(projectId, ownerId);
  if (!isDeleted) throw new BadRequestError("Failed to delete project!");

  return isDeleted;
};

export const getMyProjectsService = async (ownerId: string) => {
  const projects = await getProjectsByOwner(ownerId);
  if (!projects) throw new BadRequestError("Failed to fetch projects!");

  return projects;
};
