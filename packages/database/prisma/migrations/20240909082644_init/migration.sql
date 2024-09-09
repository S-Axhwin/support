/*
  Warnings:

  - You are about to drop the column `doctorEmail` on the `Appointment` table. All the data in the column will be lost.
  - You are about to drop the column `patientEmail` on the `Appointment` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[patientId]` on the table `PatientInfo` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `doctorId` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `patientId` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `patientId` to the `PatientInfo` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Appointment" DROP CONSTRAINT "Appointment_doctorEmail_fkey";

-- DropForeignKey
ALTER TABLE "Appointment" DROP CONSTRAINT "Appointment_patientEmail_fkey";

-- DropForeignKey
ALTER TABLE "PatientInfo" DROP CONSTRAINT "PatientInfo_email_fkey";

-- AlterTable
ALTER TABLE "Appointment" DROP COLUMN "doctorEmail",
DROP COLUMN "patientEmail",
ADD COLUMN     "doctorId" INTEGER NOT NULL,
ADD COLUMN     "patientId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "PatientInfo" ADD COLUMN     "patientId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "PatientInfo_patientId_key" ON "PatientInfo"("patientId");

-- AddForeignKey
ALTER TABLE "PatientInfo" ADD CONSTRAINT "PatientInfo_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
