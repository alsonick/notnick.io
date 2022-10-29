/*
  Warnings:

  - The primary key for the `Remaining` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Remaining" DROP CONSTRAINT "Remaining_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Remaining_pkey" PRIMARY KEY ("id");
