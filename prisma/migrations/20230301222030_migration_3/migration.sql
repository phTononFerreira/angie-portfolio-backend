/*
  Warnings:

  - Added the required column `date` to the `projects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `softwares` to the `projects` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "images" ADD COLUMN     "description" TEXT;

-- AlterTable
ALTER TABLE "projects" ADD COLUMN     "date" TEXT NOT NULL,
ADD COLUMN     "softwares" TEXT NOT NULL;
