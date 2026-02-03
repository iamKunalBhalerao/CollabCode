/*
  Warnings:

  - You are about to drop the column `content` on the `FSNode` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "FSNode" DROP COLUMN "content";

-- CreateTable
CREATE TABLE "Snapshot" (
    "id" TEXT NOT NULL,
    "fsnodeId" TEXT NOT NULL,
    "data" BYTEA,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Snapshot_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Snapshot_fsnodeId_createdAt_idx" ON "Snapshot"("fsnodeId", "createdAt");

-- AddForeignKey
ALTER TABLE "Snapshot" ADD CONSTRAINT "Snapshot_fsnodeId_fkey" FOREIGN KEY ("fsnodeId") REFERENCES "FSNode"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
