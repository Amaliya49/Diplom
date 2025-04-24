-- CreateTable
CREATE TABLE "Conversion" (
    "id" SERIAL NOT NULL,
    "customer_id" INTEGER NOT NULL,
    "from_size_id" INTEGER NOT NULL,
    "to_size_id" INTEGER NOT NULL,

    CONSTRAINT "Conversion_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Conversion" ADD CONSTRAINT "Conversion_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Conversion" ADD CONSTRAINT "Conversion_from_size_id_fkey" FOREIGN KEY ("from_size_id") REFERENCES "Size"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Conversion" ADD CONSTRAINT "Conversion_to_size_id_fkey" FOREIGN KEY ("to_size_id") REFERENCES "Size"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
