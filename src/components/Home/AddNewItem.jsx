import { useContext, useState } from "react";
import { BiPlus } from "react-icons/bi";
import { CreateInvoiceContext } from "../Pages/CreateInvoice";

export default function AddNewItem() {
  const { handleAddNewItemClick } = useContext(CreateInvoiceContext);
  return (
    <div>
      <div
        onClick={handleAddNewItemClick}
        className="flex flex-row justify-center items-center border border-transparent gap-1 text-[#564791] bg-[#776e9c] rounded-full p-3 bg-opacity-30 font-bold mt-10 cursor-pointer mb-3"
      >
        <div>
          <BiPlus />
        </div>
        <div className="">Add New Item</div>
      </div>
    </div>
  );
}
