/*
  Warnings:

  - You are about to drop the column `id_user` on the `Logger` table. All the data in the column will be lost.
  - Added the required column `id_doctor` to the `Logger` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Logger" DROP CONSTRAINT "Logger_id_user_fkey";

-- AlterTable
ALTER TABLE "Logger" DROP COLUMN "id_user",
ADD COLUMN     "id_doctor" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Logger" ADD CONSTRAINT "Logger_id_doctor_fkey" FOREIGN KEY ("id_doctor") REFERENCES "Doctor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
