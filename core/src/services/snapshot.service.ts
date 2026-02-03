import {
  createSnapShot,
  deleteSnapShot,
  getSnapShot,
  updateSnapShot,
} from "../dao/snapshot.dao";
import { BadRequestError } from "../errors/errors";
import type { SnapShotPayload } from "../types/snapshot.types";
import { snapShotZodSchema } from "../types/zod.types";

export const createSnapShotService = async (snapShotData: SnapShotPayload) => {
  const parsedData = snapShotZodSchema.safeParse(snapShotData);
  if (!parsedData.success) {
    throw new BadRequestError("Invalid Credentials!");
  }
  const { fsnodeId, data } = parsedData.data;

  const contentBuffer = Buffer.from(data, "base64");

  const snapShot = await createSnapShot({ fsnodeId, data: contentBuffer });
  if (!snapShot) throw new BadRequestError("Snapshot Creation Failed!");

  return { snapShot };
};

export const updateSnapShotService = async (
  snapShotData: SnapShotPayload,
  snapShotId: string,
) => {
  const parsedData = snapShotZodSchema.safeParse(snapShotData);
  if (!parsedData.success) {
    throw new BadRequestError("Invalid Credentials!");
  }
  const { fsnodeId, data } = parsedData.data;

  const contentBuffer = Buffer.from(data, "base64");

  const snapShot = await updateSnapShot(
    { fsnodeId, data: contentBuffer },
    snapShotId,
  );
  if (!snapShot) throw new BadRequestError("Snapshot Update Failed!");

  return { snapShot };
};

export const getSnapShotService = async (snapShotId: string) => {
  const snapShot = await getSnapShot(snapShotId);
  if (!snapShot) throw new BadRequestError("Snapshot Update Failed!");

  return { snapShot };
};

export const deleteSnapShotService = async (snapShotId: string) => {
  const snapShot = await deleteSnapShot(snapShotId);
  if (!snapShot) throw new BadRequestError("Snapshot Deletion Failed!");

  return true;
};
