/*
  Warnings:

  - You are about to drop the column `id_item` on the `Logger` table. All the data in the column will be lost.
  - You are about to drop the `Item` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Warehouse` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `id_patient` to the `Logger` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_warehouseId_fkey";

-- DropForeignKey
ALTER TABLE "Logger" DROP CONSTRAINT "Logger_id_item_fkey";

-- DropForeignKey
ALTER TABLE "Logger" DROP CONSTRAINT "Logger_id_user_fkey";

-- AlterTable
ALTER TABLE "Logger" DROP COLUMN "id_item",
ADD COLUMN     "id_patient" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Item";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "Warehouse";

-- CreateTable
CREATE TABLE "Doctor" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "timelogged" TIMESTAMP(3),

    CONSTRAINT "Doctor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Patient" (
    "id" SERIAL NOT NULL,
    "location" TEXT NOT NULL,
    "height" INTEGER NOT NULL,
    "width" INTEGER NOT NULL,
    "length" INTEGER NOT NULL,

    CONSTRAINT "Patient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Visit" (
    "id" SERIAL NOT NULL,
    "skucode" INTEGER NOT NULL,
    "item_name" TEXT NOT NULL,
    "height" INTEGER NOT NULL,
    "width" INTEGER NOT NULL,
    "length" INTEGER NOT NULL,
    "threed_obj" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "patientId" INTEGER NOT NULL,

    CONSTRAINT "Visit_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Doctor_id_key" ON "Doctor"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Doctor_username_key" ON "Doctor"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Patient_id_key" ON "Patient"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Visit_id_key" ON "Visit"("id");

-- AddForeignKey
ALTER TABLE "Visit" ADD CONSTRAINT "Visit_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Logger" ADD CONSTRAINT "Logger_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "Doctor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Logger" ADD CONSTRAINT "Logger_id_patient_fkey" FOREIGN KEY ("id_patient") REFERENCES "Visit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
