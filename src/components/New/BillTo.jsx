import { useRef, useState } from "react";
import arrowDown from "../../assets/icon-arrow-down.svg";

export default function BillTo() {
  //drop-down params for payment type.
  const [openPaymentTerms, setOpenPaymentTerms] = useState(false);
  const [paymentTerms, setPaymentTerms] = useState("-- -- --");

  const selectOneDayRef = useRef(null);
  const selectSevenDaysRef = useRef(null);
  const selectThirtyDaysRef = useRef(null);

  function handleSelectOneDay() {
    setPaymentTerms(selectOneDayRef.current.innerText);
  }

  function handleSelectSevenDaysRef() {
    setPaymentTerms(selectSevenDaysRef.current.innerText);
  }

  function handleSelectThirtyDaysRef() {
    setPaymentTerms(selectThirtyDaysRef.current.innerText);
  }

  return (
    <div>
      <div>
        {/* BILL TO. */}
        <div className="text-[#7C5DFA] font-bold text-[18px] mb-4 mt-6">
          Bill To
        </div>
        <div className="flex flex-col gap-6">
          {/* Client Name. */}
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-[#3a15ce]">
              Client's Name
            </label>
            <input
              type="text"
              placeholder="Alex Grim"
              className="border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300 placeholder:tracking-wide"
            />
          </div>

          {/* Client Email. */}
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-[#3a15ce]">
              Client's Email
            </label>
            <input
              type="email"
              placeholder="alexgrim@gmail.com"
              className="border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300 placeholder:tracking-wide"
            />
          </div>

          {/* Street Address. */}
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-[#3a15ce]">
              Street Address.
            </label>
            <input
              type="text"
              placeholder="84 Church Way"
              className="border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300 placeholder:tracking-wide"
            />
          </div>

          {/* city and post code. */}
          <div className="flex flex-row gap-4">
            {/* city. */}
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-[#3a15ce]">
                City
              </label>
              <input
                type="text"
                placeholder="Bradford"
                className="border border-[#7C5DFA] p-4 rounded-md border-opacity-70 font-bold focus:outline-[#7C5DFA] w-40 outline-transparent focus:duration-300 placeholder:tracking-wide"
              />
            </div>

            {/* post code. */}
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-[#3a15ce]">
                Post Code
              </label>
              <input
                type="text"
                placeholder="BD1 39PB"
                className="border border-[#7C5DFA] p-4 rounded-md border-opacity-70 font-bold focus:outline-[#7C5DFA] w-40 outline-transparent duration-300 placeholder:tracking-wide"
              />
            </div>
          </div>

          {/* country. */}
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-[#3a15ce]">
              Country
            </label>
            <input
              type="text"
              placeholder="United Kingdom"
              className="border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300 placeholder:tracking-wide"
            />
          </div>

          {/* invoice date. */}
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-[#3a15ce]">
              Invoice Date
            </label>
            <input
              type="date"
              placeholder="21 Aug 2021"
              className="border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300"
            />
          </div>

          {/* Payment Terms. */}
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-[#3a15ce]">
              Payment Terms
            </label>
            <div className="flex flex-row justify-between border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300">
              <div>{paymentTerms}</div>
              <div onClick={() => setOpenPaymentTerms(!openPaymentTerms)}>
                <img src={arrowDown} alt="" className="w-3 h-2 mt-2" />
              </div>
            </div>
            {openPaymentTerms && (
              <div className="duration-300 flex flex-col gap-3.5 border border-slate-300 bg-white font-semibold -mt-2 rounded-md py-4">
                {/* 1 Day. */}
                <div
                  onClick={handleSelectOneDay}
                  ref={selectOneDayRef}
                  className="hover:border hover:border-transparent hover:bg-slate-200 hover:p-2 hover:duration-300 pl-2 mb-1"
                >
                  Net 1 Day
                </div>

                {/* 7 Days. */}
                <div
                  onClick={handleSelectSevenDaysRef}
                  ref={selectSevenDaysRef}
                  className="hover:border hover:border-transparent hover:bg-slate-200 hover:p-2 hover:duration-300 pl-2 mb-1"
                >
                  Net 7 Days
                </div>

                {/* 30 Days. */}
                <div
                  onClick={handleSelectThirtyDaysRef}
                  ref={selectThirtyDaysRef}
                  className="hover:border hover:border-transparent hover:bg-slate-200 hover:p-2 hover:duration-300 pl-2"
                >
                  Net 30 Days
                </div>
              </div>
            )}
          </div>

          {/* Project Description. */}
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-[#3a15ce]">
              Project Description
            </label>
            <input
              type="text"
              placeholder="Graphics Design"
              className="border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300 placeholder:tracking-wide"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
