import type { NextFunction, Response } from "express";
import type {
  CreateSnapShotRequest,
  deleteSnapShotRequest,
  getSnapShotRequest,
  SnapShotPayload,
  updateSnapShotRequest,
} from "../types/snapshot.types";
import {
  createSnapShotService,
  deleteSnapShotService,
  getSnapShotService,
  updateSnapShotService,
} from "../services/snapshot.service";

export const createSnapShotController = async (
  req: CreateSnapShotRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data: SnapShotPayload = req.body;

    const snapShot = await createSnapShotService(data);

    res.status(201).json({
      success: true,
      message: "Snapshot Created Successfully",
      snapShot,
    });
  } catch (error) {
    next(error);
  }
};

export const getSnapShotController = async (
  req: getSnapShotRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const snapShotId = req.params.snapShotId;

    const snapShot = await getSnapShotService(snapShotId);

    res.status(200).json({
      success: true,
      message: "Snapshot Fetched Successfully",
      snapShot,
    });
  } catch (error) {
    next(error);
  }
};

export const updateSnapShotController = async (
  req: updateSnapShotRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const snapShotId = req.params.snapShotId as string;
    const data: SnapShotPayload = req.body;

    const snapShot = await updateSnapShotService(data, snapShotId);

    res.status(200).json({
      success: true,
      message: "Snapshot Updated Successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const deleteSnapShotController = async (
  req: deleteSnapShotRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const snapShotId = req.params.snapShotId as string;

    await deleteSnapShotService(snapShotId);

    res.status(200).json({
      success: true,
      message: "Snapshot Deleted Successfully",
    });
  } catch (error) {
    next(error);
  }
};
