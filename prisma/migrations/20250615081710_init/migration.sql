/*
  Warnings:

  - You are about to drop the column `amount_crypto` on the `order` table. All the data in the column will be lost.
  - Added the required column `crypto_amount` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `order` DROP COLUMN `amount_crypto`,
    ADD COLUMN `crypto_amount` DECIMAL(18, 8) NOT NULL;

-- AlterTable
ALTER TABLE `paymentmethod` MODIFY `details` JSON NULL;
