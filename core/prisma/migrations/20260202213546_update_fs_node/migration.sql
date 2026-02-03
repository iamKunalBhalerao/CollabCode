/*
  Warnings:

  - The `content` column on the `FSNode` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "FSNode" DROP COLUMN "content",
ADD COLUMN     "content" BYTEA;
