import { useContext } from "react";
import { CreateInvoiceContext } from "../Pages/CreateInvoice";

export default function BillFrom() {
  const {
    billFromAddress,
    setBillFromAddress,
    billFromCity,
    setBillFromCity,
    billFromPostCode,
    setBillFromPostCode,
    billFromCountry,
    setBillFromCountry,
    register,
    errors,
  } = useContext(CreateInvoiceContext);

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
              value={billFromAddress}
              onChange={(e) => setBillFromAddress(e.target.value)}
              placeholder="19 Union Terrace"
              {...register("address", { required: true })}
              className="border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300 placeholder:tracking-wide"
            />
            {errors.address && (
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
                value={billFromCity}
                onChange={(e) => setBillFromCity(e.target.value)}
                placeholder="London"
                {...register("city", { required: true })}
                className="border border-[#7C5DFA] p-4 rounded-md border-opacity-70 font-bold focus:outline-[#7C5DFA] w-40 outline-transparent focus:duration-300 placeholder:tracking-wide"
              />
              {errors.city && (
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
                value={billFromPostCode}
                onChange={(e) => setBillFromPostCode(e.target.value)}
                placeholder="E1 3EZ"
                {...register("postCode", { required: true })}
                className="border border-[#7C5DFA] p-4 rounded-md border-opacity-70 font-bold focus:outline-[#7C5DFA] w-40 outline-transparent duration-300 placeholder:tracking-wide"
              />
              {errors.postCode && (
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
              value={billFromCountry}
              onChange={(e) => setBillFromCountry(e.target.value)}
              placeholder="United Kingdom"
              {...register("country", { required: true })}
              className="border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300 placeholder:tracking-wide"
            />
            {errors.country && (
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
