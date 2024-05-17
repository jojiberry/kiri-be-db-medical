/*
  Warnings:

  - You are about to drop the column `id_doctor` on the `Logger` table. All the data in the column will be lost.
  - You are about to drop the column `id_patient` on the `Logger` table. All the data in the column will be lost.
  - Added the required column `doctorId` to the `Logger` table without a default value. This is not possible if the table is not empty.
  - Added the required column `patientId` to the `Logger` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Logger" DROP CONSTRAINT "Logger_id_doctor_fkey";

-- DropForeignKey
ALTER TABLE "Logger" DROP CONSTRAINT "Logger_id_patient_fkey";

-- AlterTable
ALTER TABLE "Logger" DROP COLUMN "id_doctor",
DROP COLUMN "id_patient",
ADD COLUMN     "doctorId" INTEGER NOT NULL,
ADD COLUMN     "patientId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Logger" ADD CONSTRAINT "Logger_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Logger" ADD CONSTRAINT "Logger_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Visit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
