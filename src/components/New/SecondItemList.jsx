import deleteIcon from "../../assets/icon-delete.svg";

export default function SecondItemList() {
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
              placeholder="Email Design"
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
                  className="w-16 border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300 placeholder:tracking-wide"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-[#2f206b]">
                  Price
                </label>
                <input
                  type="number"
                  placeholder="400.00"
                  className="w-24 border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300 placeholder:tracking-wide"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="mb-[17px] text-[#2f206b]">
                  Total
                </label>
                <span className="font-extrabold text-[#7C5DFA] opacity-70">
                  400.00
                </span>
              </div>
            </div>
            <div>
              <img src={deleteIcon} alt="" className="mt-[30px] w-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
