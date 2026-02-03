import { prisma } from "../prisma";
import type { createProjectInterface } from "../types/project.types";

export const createProject = async (
  data: createProjectInterface,
  ownerId: string,
) => {
  return prisma.project.create({
    data: {
      title: data.title,
      description: data.description,
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
      title: data.title,
      description: data.description,
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