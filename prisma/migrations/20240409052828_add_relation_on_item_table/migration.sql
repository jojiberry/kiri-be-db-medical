/*
  Warnings:

  - You are about to drop the `_ItemToWarehouse` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ItemToWarehouse" DROP CONSTRAINT "_ItemToWarehouse_A_fkey";

-- DropForeignKey
ALTER TABLE "_ItemToWarehouse" DROP CONSTRAINT "_ItemToWarehouse_B_fkey";

-- DropTable
DROP TABLE "_ItemToWarehouse";

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_warehouseId_fkey" FOREIGN KEY ("warehouseId") REFERENCES "Warehouse"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
