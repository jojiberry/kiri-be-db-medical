/*
  Warnings:

  - You are about to drop the column `item_name` on the `Visit` table. All the data in the column will be lost.
  - Added the required column `visit_name` to the `Visit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Visit" DROP COLUMN "item_name",
ADD COLUMN     "visit_name" TEXT NOT NULL;
