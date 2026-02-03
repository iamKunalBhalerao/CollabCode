import { prisma } from "../prisma";
import type { SnapShotPayload } from "../types/snapshot.types";

export const createSnapShot = async (snapShotData: {
  fsnodeId: string;
  data: Buffer<ArrayBuffer>;
}) => {
  return prisma.snapshot.create({
    data: {
      fsnodeId: snapShotData.fsnodeId,
      data: snapShotData.data,
    },
  });
};

export const getSnapShot = async (snapShotId: string) => {
  return prisma.snapshot.findFirst({
    where: { id: snapShotId },
  });
};

export const updateSnapShot = async (
  snapShotData: {
    fsnodeId: string;
    data: Buffer<ArrayBuffer>;
  },
  snapShotId: string,
) => {
  return prisma.snapshot.update({
    where: { id: snapShotId },
    data: {
      fsnodeId: snapShotData.fsnodeId,
      data: snapShotData.data,
    },
  });
};

export const deleteSnapShot = async (snapShotId: string) => {
  return prisma.snapshot.delete({
    where: { id: snapShotId },
  });
};