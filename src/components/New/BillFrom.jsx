import { useContext } from "react";
import { CreateInvoiceContext } from "../Pages/CreateInvoice";

export default function BillFrom() {
  const errorMsg = (error) => {
    if (error?.type === "required") return `This field is required!`;
    else if (error?.type === "min") return "Min of 3 characters!";
    else return "Error";
  };

  return (
    <div>
      <div>
        <div className="flex flex-col gap-6">
          {/* street address. */}
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-[#3a15ce]">
              Street Address
            </label>
            <input
              type="text"
              {...register("fromAddress", { required: true, min: 3 })}
              onChange={(e) => setBillFromAddress(e.target.value)}
              placeholder="19 Union Terrace"
              className="border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300 placeholder:tracking-wide"
            />
            {errors.fromAddress && (
              <span className="text-red-500 font-semibold">
                {errorMsg(errors.fromAddress)}
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
                {...register("fromCity", {
                  required: true,
                  // minLenght: { value: 3, message: "MinLength is 3 characters" },
                })}
                onChange={(e) => setBillFromCity(e.target.value)}
                placeholder="London"
                className="border border-[#7C5DFA] p-4 rounded-md border-opacity-70 font-bold focus:outline-[#7C5DFA] w-40 outline-transparent focus:duration-300 placeholder:tracking-wide"
              />
              {errors.fromCity && (
                <span className="text-red-500 font-semibold">
                  {errorMsg(errors.fromCity)}
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
                {...register("fromPostCode", { required: true })}
                onChange={(e) => setBillFromPostCode(e.target.value)}
                placeholder="E1 3EZ"
                className="border border-[#7C5DFA] p-4 rounded-md border-opacity-70 font-bold focus:outline-[#7C5DFA] w-40 outline-transparent duration-300 placeholder:tracking-wide"
              />
              {errors.fromPostCode && (
                <span className="text-red-500 font-semibold">
                  {errorMsg(errors.fromPostCode)}
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
              {...register("fromCountry", { required: true })}
              onChange={(e) => setBillFromCountry(e.target.value)}
              placeholder="United Kingdom"
              className="border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300 placeholder:tracking-wide"
            />
            {errors.fromCountry && (
              <span className="text-red-500 font-semibold">
                {errorMsg(errors.fromCountry)}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
