import arrowDown from "../../assets/icon-arrow-down.svg";
import plus from "../../assets/icon-plus.svg";
import { BiPlus } from "react-icons/bi";

export default function Display() {
  return (
    <div>
      <div className="font-eb-garamond flex flex-row justify-between px-4 pt-7 items-center">
        <div>
          <div className="font-bold text-[26px] tracking-tight leading-8">
            Invoices
          </div>
          <div className="font-extrabold opacity-50">No invoices</div>
        </div>
        <div className="flex flex-row gap-4">
          <div className="flex flex-row justify-center items-center gap-2">
            <div className="font-bold text-[18px] tracking-wide">Filter</div>
            <img src={arrowDown} alt="" className="w-3 h-2" />
          </div>
          <div className="flex flex-row gap-2 justify-center items-center border border-transparent bg-[#7C5DFA] rounded-full w-14 px-12 h-14">
            <img
              src={plus}
              alt=""
              className="w-3 h-3 border border-white bg-white rounded-full p-3"
            />
            <div className="text-white font-semibold tracking-wide">New</div>
          </div>
        </div>
      </div>
    </div>
  );
}
