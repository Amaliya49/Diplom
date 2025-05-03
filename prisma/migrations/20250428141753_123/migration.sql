/*
  Warnings:

  - You are about to drop the column `customer_id` on the `Conversion` table. All the data in the column will be lost.
  - You are about to drop the column `size_label` on the `Size` table. All the data in the column will be lost.
  - Added the required column `label` to the `Size` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Conversion" DROP CONSTRAINT "Conversion_customer_id_fkey";

-- AlterTable
ALTER TABLE "Conversion" DROP COLUMN "customer_id";

-- AlterTable
ALTER TABLE "Size" DROP COLUMN "size_label",
ADD COLUMN     "label" TEXT NOT NULL;
