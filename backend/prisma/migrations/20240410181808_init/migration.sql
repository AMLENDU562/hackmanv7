/*
  Warnings:

  - You are about to drop the column `password` on the `Team` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Leader" ADD COLUMN     "password" TEXT;

-- AlterTable
ALTER TABLE "Team" DROP COLUMN "password";