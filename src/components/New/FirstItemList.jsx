import { useContext } from "react";
import deleteIcon from "../../assets/icon-delete.svg";
import { CreateInvoiceContext } from "../Pages/CreateInvoice";
import SecondItemList from "./SecondItemList";

export default function FirstItemList() {
  const { items } = useContext(CreateInvoiceContext);

  return (
    <div>
      <div>
        <SecondItemList />
        {/* First Item Name. */}
        <div>
          {items.map((item) => (
            <div className="flex flex-col gap-6 mb-10 mt-10">
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-[#2f206b]">
                  Item Name
                </label>
                <input
                  type="text"
                  placeholder="Banner Design"
                  value={item.itemName}
                  className="border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300 placeholder:tracking-wide"
                />
              </div>
              <div className="flex flex-row justify-between items-center px-1">
                <div className="flex flex-row gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="" className="text-[#2f206b]">
                      Qty.
                    </label>
                    <input
                      type="number"
                      placeholder="1"
                      value={item.Qty}
                      className="w-16 border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300 placeholder:tracking-wide"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="" className="text-[#2f206b]">
                      Price
                    </label>
                    <input
                      type="number"
                      placeholder="156.00"
                      value={item.Price}
                      className="w-24 border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300 placeholder:tracking-wide"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="" className="mb-[17px] text-[#2f206b]">
                      Total
                    </label>
                    <span
                      value={item.Total}
                      className="font-extrabold text-[#7C5DFA] opacity-70"
                    >
                      {/* 156.00 */}
                    </span>
                  </div>
                </div>
                <div>
                  <img src={deleteIcon} alt="" className="mt-[30px] w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
