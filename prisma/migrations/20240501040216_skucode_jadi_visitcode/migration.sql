/*
  Warnings:

  - You are about to drop the column `skucode` on the `Visit` table. All the data in the column will be lost.
  - Added the required column `visitcode` to the `Visit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Visit" DROP COLUMN "skucode",
ADD COLUMN     "visitcode" INTEGER NOT NULL;
