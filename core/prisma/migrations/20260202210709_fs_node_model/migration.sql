-- CreateEnum
CREATE TYPE "FSNType" AS ENUM ('FILE', 'FOLDER');

-- CreateTable
CREATE TABLE "FSNode" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "FSNType" NOT NULL,
    "content" TEXT,
    "parentId" TEXT,
    "projectId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FSNode_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FSNode_projectId_parentId_name_key" ON "FSNode"("projectId", "parentId", "name");

-- AddForeignKey
ALTER TABLE "FSNode" ADD CONSTRAINT "FSNode_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "FSNode"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FSNode" ADD CONSTRAINT "FSNode_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
