/*
  Warnings:

  - You are about to drop the column `remaining` on the `Message` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Message" DROP COLUMN "remaining";

-- CreateTable
CREATE TABLE "Remaining" (
    "userId" TEXT NOT NULL,
    "remaining" INTEGER NOT NULL,

    CONSTRAINT "Remaining_pkey" PRIMARY KEY ("userId")
);
