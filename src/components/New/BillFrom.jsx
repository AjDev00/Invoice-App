export default function BillFrom({ register, errors }) {
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
              {...register("bill_from_street_address", {
                required: true,
                min: 3,
              })}
              placeholder="19 Union Terrace"
              className="border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300 placeholder:tracking-wide"
            />
            {errors.bill_from_street_address && (
              <span className="text-red-500 font-semibold">
                {errorMsg(errors.bill_from_street_address)}
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
                {...register("bill_from_city", {
                  required: true,
                  // minLenght: { value: 3, message: "MinLength is 3 characters" },
                })}
                placeholder="London"
                className="border border-[#7C5DFA] p-4 rounded-md border-opacity-70 font-bold focus:outline-[#7C5DFA] w-40 outline-transparent focus:duration-300 placeholder:tracking-wide"
              />
              {errors.bill_from_city && (
                <span className="text-red-500 font-semibold">
                  {errorMsg(errors.bill_from_city)}
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
                {...register("bill_from_post_code", { required: true })}
                placeholder="E1 3EZ"
                className="border border-[#7C5DFA] p-4 rounded-md border-opacity-70 font-bold focus:outline-[#7C5DFA] w-40 outline-transparent duration-300 placeholder:tracking-wide"
              />
              {errors.bill_from_post_code && (
                <span className="text-red-500 font-semibold">
                  {errorMsg(errors.bill_from_post_code)}
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
              {...register("bill_from_country", { required: true })}
              placeholder="United Kingdom"
              className="border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300 placeholder:tracking-wide"
            />
            {errors.bill_from_country && (
              <span className="text-red-500 font-semibold">
                {errorMsg(errors.bill_from_country)}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
