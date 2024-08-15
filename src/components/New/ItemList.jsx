export default function ItemList({ items, handleDelete }) {
  return (
    <div>
      <div className="flex flex-col gap-16">
        {/* Form Mapping. */}
        <div>
          {items.map((item, index) => (
            <div key={index} className="flex flex-col gap-6 mb-10">
              {/* Item Name. */}
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-[#2f206b]">
                  Item Name
                </label>
                <input
                  type="text"
                  name="itemName"
                  placeholder="Banner Design"
                  value={item.itemName}
                  onChange={(e) => handleInputChange(index, e)}
                  className="border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300 placeholder:tracking-wide"
                />
                {itemNameErr ? <div>{itemNameErr}</div> : ""}
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
                      placeholder="1"
                      value={item.Qty}
                      onChange={(e) => handleInputChange(index, e)}
                      className="w-16 border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300 placeholder:tracking-wide"
                    />
                    {quantityErr ? <div>{quantityErr}</div> : ""}
                  </div>

                  {/* Price. */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="" className="text-[#2f206b]">
                      Price
                    </label>
                    <input
                      type="number"
                      name="Price"
                      placeholder="156.00"
                      value={item.Price}
                      onChange={(e) => handleInputChange(index, e)}
                      className="w-24 border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300 placeholder:tracking-wide"
                    />
                    {priceErr ? <div>{priceErr}</div> : ""}
                  </div>

                  {/* Total. */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="" className="mb-[17px] text-[#2f206b]">
                      Total
                    </label>
                    <span className="font-extrabold text-[#7C5DFA] opacity-70">
                      {item.Qty || item.Price ? item.Qty * item.Price : "0.00"}
                    </span>
                  </div>
                </div>

                {/* Delete Icon. */}
                <div onClick={() => handleDelete(index)}>
                  <img
                    src={deleteIcon}
                    alt=""
                    className="mt-[30px] w-4 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
