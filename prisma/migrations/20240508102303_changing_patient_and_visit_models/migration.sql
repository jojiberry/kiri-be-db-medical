/*
  Warnings:

  - You are about to drop the column `length` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `width` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `height` on the `Visit` table. All the data in the column will be lost.
  - You are about to drop the column `length` on the `Visit` table. All the data in the column will be lost.
  - You are about to drop the column `width` on the `Visit` table. All the data in the column will be lost.
  - Added the required column `age` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstname` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastname` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sex` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `date` on the `Visit` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Patient" DROP COLUMN "length",
DROP COLUMN "location",
DROP COLUMN "width",
ADD COLUMN     "age" INTEGER NOT NULL,
ADD COLUMN     "firstname" TEXT NOT NULL,
ADD COLUMN     "lastname" TEXT NOT NULL,
ADD COLUMN     "sex" TEXT NOT NULL,
ADD COLUMN     "weight" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Visit" DROP COLUMN "height",
DROP COLUMN "length",
DROP COLUMN "width",
DROP COLUMN "date",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL;
