import type { NextFunction, Response } from "express";
import type {
  createProjectRequest,
  deleteProjectRequest,
  getProjectRequest,
  updateProjectRequest,
} from "../types/project.types";
import {
  createProjectService,
  deleteProjectService,
  getMyProjectsService,
  getProjectService,
  updateProjectService,
} from "../services/project.service";

export const createProjectController = async (
  req: createProjectRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body;
    const userId = req.user?.id;

    const project = await createProjectService(data, userId!);

    res.status(201).json({
      success: true,
      message: "Project Created Successfully",
      project,
    });
  } catch (error) {
    next(error);
  }
};

export const getProjectController = async (
  req: getProjectRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const projectId = req.params.projectId;
    const userId = req.user?.id;

    const project = await getProjectService(projectId, userId!);

    res.status(200).json({
      success: true,
      message: "Project Fetched Successfully",
      project,
    });
  } catch (error) {
    next(error);
  }
};

export const updateProjectController = async (
  req: updateProjectRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const projectId = req.params.projectId;
    const data = req.body;
    const userId = req.user?.id;

    const project = await updateProjectService(projectId, data, userId!);

    res.status(200).json({
      success: true,
      message: "Project Updated Successfully",
      project,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteProjectController = async (
  req: deleteProjectRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const projectId = req.params.projectId;
    const userId = req.user?.id;

    const isDeleted = await deleteProjectService(projectId, userId!);

    res.status(200).json({
      success: true,
      message: "Project Deleted Successfully",
      isDeleted,
    });
  } catch (error) {
    next(error);
  }
};

export const getMyProjectsController = async (
  req: getProjectRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;

    const projects = await getMyProjectsService(userId!);

    res.status(200).json({
      success: true,
      message: "Project Fetched Successfully",
      projects,
    });
  } catch (error) {
    next(error);
  }
};
