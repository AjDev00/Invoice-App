import { useState } from "react";
import deleteIcon from "../../assets/icon-delete.svg";

export default function SecondItemList() {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const total = price * quantity;

  return (
    <div>
      <div>
        {/* Second Item Name. */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-[#2f206b]">
              Item Name
            </label>
            <input
              type="text"
              name="itemName"
              placeholder="Email Design"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              className="border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300 placeholder:tracking-wide"
            />
          </div>
          <div className="flex flex-row justify-between items-center px-1">
            <div className="flex flex-row gap-4">
              {/* Quantity. */}
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-[#2f206b]">
                  Qty.
                </label>
                <input
                  type="number"
                  name="Qty"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="1"
                  className="w-16 border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300 placeholder:tracking-wide"
                />
              </div>

              {/* Price. */}
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-[#2f206b]">
                  Price
                </label>
                <input
                  type="number"
                  name="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="400.00"
                  className="w-24 border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300 placeholder:tracking-wide"
                />
              </div>

              {/* Total. */}
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="mb-[17px] text-[#2f206b]">
                  Total
                </label>
                <span className="font-extrabold text-[#7C5DFA] opacity-70">
                  {total ? total : "0.00"}
                </span>
              </div>
            </div>

            {/* Delete Icon. */}
            <div>
              <img
                src={deleteIcon}
                alt=""
                className="mt-[30px] w-4 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
