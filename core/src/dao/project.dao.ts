import { prisma } from "../prisma";
import type { createProjectInterface } from "../types/project.types";

export const createProject = async (
  data: createProjectInterface,
  ownerId: string,
) => {
  return prisma.project.create({
    data: {
      name: data.name,
      ownerId: ownerId,
    },
  });
};

export const getProject = async (projectId: string, ownerId: string) => {
  return prisma.project.findUnique({
    where: {
      id: projectId,
      ownerId: ownerId,
    },
  });
};

export const updateProject = async (
  projectId: string,
  data: createProjectInterface,
  ownerId: string,
) => {
  return prisma.project.update({
    where: {
      id: projectId,
      ownerId: ownerId,
    },
    data: {
      name: data.name,
    },
  });
};

export const deleteProject = async (projectId: string, ownerId: string) => {
  return prisma.project.delete({
    where: {
      id: projectId,
      ownerId: ownerId,
    },
  });
};

export const getProjectsByOwner = async (ownerId: string) => {
  return prisma.project.findMany({
    where: {
      ownerId: ownerId,
    },
  });
};

export const createCollaborationForOwner = async (
  projectId: string,
  ownerId: string,
) => {
  return prisma.collaboration.create({
    data: {
      projectId: projectId,
      userId: ownerId,
      role: "OWNER",
    },
  });
};
