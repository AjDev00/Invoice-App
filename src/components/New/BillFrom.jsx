export default function BillFrom() {
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
              placeholder="19 Union Terrace"
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
                placeholder="London"
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
                placeholder="E1 3EZ"
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
        </div>
      </div>
    </div>
  );
}
