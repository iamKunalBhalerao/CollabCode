import type { Request } from "express";

export interface SnapShotPayload {
  fsnodeId: string;
  data: string; // Array of Base64 strings
}

export interface CreateSnapShot {
  fsnodeId: string;
  data: string; // Array of Base64 strings
}

export type CreateSnapShotRequest = Request<{}, {}, CreateSnapShot>;
export type getSnapShotRequest = Request<{snapShotId: string}, {}, {}>;
export type deleteSnapShotRequest = Request<{snapShotId: string}, {}, {}>;
export type updateSnapShotRequest = Request<{snapShotId: string}, {}, CreateSnapShot>;