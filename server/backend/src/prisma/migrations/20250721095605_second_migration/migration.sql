/*
  Warnings:

  - Added the required column `email` to the `contactForm` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "contactForm" ADD COLUMN     "email" TEXT NOT NULL;
