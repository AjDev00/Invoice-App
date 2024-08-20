export default function BillTo({ register, errors }) {
  const errorMsg = (error) => {
    if (error?.type === "required") return `This field is required!`;
    else if (error?.type === "min") return "Min of 3 characters!";
    else return "Error";
  };

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
              {...register("bill_to_client_name", { required: true })}
              placeholder="Alex Grim"
              className="border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300 placeholder:tracking-wide"
            />
            {errors.bill_to_client_name && (
              <span className="text-red-500 font-semibold">
                {errorMsg(errors.bill_to_client_name)}
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
              {...register("bill_to_client_email", { required: true })}
              placeholder="alexgrim@gmail.com"
              className="border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300 placeholder:tracking-wide"
            />
            {errors.bill_to_client_email && (
              <span className="text-red-500 font-semibold">
                {errorMsg(errors.bill_to_client_email)}
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
              {...register("bill_to_street_address", { required: true })}
              placeholder="84 Church Way"
              className="border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300 placeholder:tracking-wide"
            />
            {errors.bill_to_street_address && (
              <span className="text-red-500 font-semibold">
                {errorMsg(errors.bill_to_street_address)}
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
                {...register("bill_to_city", { required: true })}
                placeholder="Bradford"
                className="border border-[#7C5DFA] p-4 rounded-md border-opacity-70 font-bold focus:outline-[#7C5DFA] w-40 outline-transparent focus:duration-300 placeholder:tracking-wide"
              />
              {errors.bill_to_city && (
                <span className="text-red-500 font-semibold">
                  {errorMsg(errors.bill_to_city)}
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
                {...register("bill_to_post_code", { required: true })}
                placeholder="BD1 39PB"
                className="border border-[#7C5DFA] p-4 rounded-md border-opacity-70 font-bold focus:outline-[#7C5DFA] w-40 outline-transparent duration-300 placeholder:tracking-wide"
              />
              {errors.bill_to_post_code && (
                <span className="text-red-500 font-semibold">
                  {errorMsg(errors.bill_to_post_code)}
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
              {...register("bill_to_country", { required: true })}
              placeholder="United Kingdom"
              className="border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300 placeholder:tracking-wide"
            />
            {errors.bill_to_country && (
              <span className="text-red-500 font-semibold">
                {errorMsg(errors.bill_to_country)}
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
              {...register("bill_to_invoice_date", { required: true })}
              placeholder="2021-Aug-12"
              className="border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300"
            />
            {errors.bill_to_invoice_date && (
              <span className="text-red-500 font-semibold">
                {errorMsg(errors.bill_to_invoice_date)}
              </span>
            )}
          </div>

          {/* Payment Terms. */}
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-[#3a15ce]">
              Payment Terms
            </label>
            <div>
              <select
                {...register("bill_to_payment_terms", { required: true })}
                className="w-full border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300 placeholder:tracking-wide"
              >
                <option>Net 1 Day</option>
                <option>Net 7 Days</option>
                <option>Net 30 Days</option>
              </select>
              {errors.bill_to_payment_terms && (
                <span className="text-red-500 font-semibold">
                  {errorMsg(errors.bill_to_payment_terms)}
                </span>
              )}
            </div>
          </div>

          {/* Project Description. */}
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-[#3a15ce]">
              Project Description
            </label>
            <input
              type="text"
              {...register("bill_to_project_desc", { required: true })}
              placeholder="Graphics Design"
              className="border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300 placeholder:tracking-wide"
            />
            {errors.bill_to_project_desc && (
              <span className="text-red-500 font-semibold">
                {errorMsg(errors.bill_to_project_desc)}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
