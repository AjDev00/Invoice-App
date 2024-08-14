import { useContext, useRef, useState } from "react";
import arrowDown from "../../assets/icon-arrow-down.svg";
import { CreateInvoiceContext } from "../Pages/CreateInvoice";

export default function BillTo() {
  const {
    billToName,
    setBillToName,
    billToEmail,
    setBillToEmail,
    billToAddress,
    setBillToAddress,
    billToCity,
    setBillToCity,
    billToPostCode,
    setBillToPostCode,
    billToCountry,
    setBillToCountry,
    billToInvoiceDate,
    setBillToInvoiceDate,
    billToPaymentTerms,
    setBillToPaymentTerms,
    billToProjectDesc,
    setBillToProjectDesc,
    register,
    errors,
    dateErr,
  } = useContext(CreateInvoiceContext);

  //drop-down params for payment type.
  const [openPaymentTerms, setOpenPaymentTerms] = useState(false);

  const selectOneDayRef = useRef(null);
  const selectSevenDaysRef = useRef(null);
  const selectThirtyDaysRef = useRef(null);

  function handleSelectOneDay() {
    setBillToPaymentTerms(selectOneDayRef.current.innerText);
    setOpenPaymentTerms(false);
  }

  function handleSelectSevenDaysRef() {
    setBillToPaymentTerms(selectSevenDaysRef.current.innerText);
    setOpenPaymentTerms(false);
  }

  function handleSelectThirtyDaysRef() {
    setBillToPaymentTerms(selectThirtyDaysRef.current.innerText);
    setOpenPaymentTerms(false);
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
              {...register("name", { required: true })}
              value={billToName}
              onChange={(e) => setBillToName(e.target.value)}
              placeholder="Alex Grim"
              className="border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300 placeholder:tracking-wide"
            />
            {errors.name && (
              <span className="text-red-500 font-semibold">
                This field is required!
              </span>
            )}
          </div>

          {/* Client Email. */}
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-[#3a15ce]">
              Client's Email
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              value={billToEmail}
              onChange={(e) => setBillToEmail(e.target.value)}
              placeholder="alexgrim@gmail.com"
              className="border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300 placeholder:tracking-wide"
            />
            {errors.email && (
              <span className="text-red-500 font-semibold">
                This field is required!
              </span>
            )}
          </div>

          {/* Street Address. */}
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-[#3a15ce]">
              Street Address
            </label>
            <input
              type="text"
              {...register("streetAddress", { required: true })}
              value={billToAddress}
              onChange={(e) => setBillToAddress(e.target.value)}
              placeholder="84 Church Way"
              className="border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300 placeholder:tracking-wide"
            />
            {errors.streetAddress && (
              <span className="text-red-500 font-semibold">
                This field is required!
              </span>
            )}
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
                {...register("toCity", { required: true })}
                value={billToCity}
                onChange={(e) => setBillToCity(e.target.value)}
                placeholder="Bradford"
                className="border border-[#7C5DFA] p-4 rounded-md border-opacity-70 font-bold focus:outline-[#7C5DFA] w-40 outline-transparent focus:duration-300 placeholder:tracking-wide"
              />
              {errors.toCity && (
                <span className="text-red-500 font-semibold">
                  This field is required!
                </span>
              )}
            </div>

            {/* post code. */}
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-[#3a15ce]">
                Post Code
              </label>
              <input
                type="text"
                {...register("toPostCode", { required: true })}
                value={billToPostCode}
                onChange={(e) => setBillToPostCode(e.target.value)}
                placeholder="BD1 39PB"
                className="border border-[#7C5DFA] p-4 rounded-md border-opacity-70 font-bold focus:outline-[#7C5DFA] w-40 outline-transparent duration-300 placeholder:tracking-wide"
              />
              {errors.toPostCode && (
                <span className="text-red-500 font-semibold">
                  This field is required!
                </span>
              )}
            </div>
          </div>

          {/* country. */}
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-[#3a15ce]">
              Country
            </label>
            <input
              type="text"
              {...register("toCountry", { required: true })}
              value={billToCountry}
              onChange={(e) => setBillToCountry(e.target.value)}
              placeholder="United Kingdom"
              className="border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300 placeholder:tracking-wide"
            />
            {errors.toCountry && (
              <span className="text-red-500 font-semibold">
                This field is required!
              </span>
            )}
          </div>

          {/* invoice date. */}
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-[#3a15ce]">
              Invoice Date
            </label>
            <input
              type="text"
              {...register("date", { required: true })}
              value={billToInvoiceDate}
              onChange={(e) => setBillToInvoiceDate(e.target.value)}
              placeholder="2021-Aug-12"
              className="border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300"
            />
            {dateErr ? (
              <div className="text-red-500 font-semibold">{dateErr}</div>
            ) : (
              errors.date && (
                <span className="text-red-500 font-semibold">Pick a date!</span>
              )
            )}
          </div>

          {/* Payment Terms. */}
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-[#3a15ce]">
              Payment Terms
            </label>
            <div className="flex flex-row justify-between border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300">
              <div>{billToPaymentTerms}</div>
              <div onClick={() => setOpenPaymentTerms(!openPaymentTerms)}>
                <img
                  src={arrowDown}
                  alt=""
                  className="w-3 h-2 mt-2 cursor-pointer"
                />
              </div>
            </div>
            {openPaymentTerms && (
              <div className="duration-300 flex flex-col gap-3.5 border border-slate-300 bg-white font-semibold -mt-2 rounded-md">
                {/* 1 Day. */}
                <div
                  onClick={handleSelectOneDay}
                  ref={selectOneDayRef}
                  className="hover:border hover:border-transparent hover:bg-slate-200 hover:p-4 hover:duration-300 pl-2 mb-1 pt-4 duration-100"
                >
                  Net 1 Day
                </div>

                {/* 7 Days. */}
                <div
                  onClick={handleSelectSevenDaysRef}
                  ref={selectSevenDaysRef}
                  className="hover:border hover:border-transparent hover:bg-slate-200 hover:p-4 hover:duration-300 pl-2 mb-1 pt-2 duration-100"
                >
                  Net 7 Days
                </div>

                {/* 30 Days. */}
                <div
                  onClick={handleSelectThirtyDaysRef}
                  ref={selectThirtyDaysRef}
                  className="hover:border hover:border-transparent hover:bg-slate-200 hover:p-4 hover:duration-300 pl-2 pt-2 duration-100"
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
              {...register("projectDesc", { required: true })}
              value={billToProjectDesc}
              onChange={(e) => setBillToProjectDesc(e.target.value)}
              placeholder="Graphics Design"
              className="border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300 placeholder:tracking-wide"
            />
            {errors.projectDesc && (
              <span className="text-red-500 font-semibold">
                This field is required!
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
