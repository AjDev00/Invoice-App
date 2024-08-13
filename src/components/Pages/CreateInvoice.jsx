import Header from "../Home/Header";
import leftArrow from "../../assets/icon-arrow-left.svg";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import deleteIcon from "../../assets/icon-delete.svg";

export default function CreateInvoice() {
  const history = useHistory();
  return (
    <div>
      <div className="mb-10 font-open-sans">
        <div>
          <Header />
        </div>
        <div className="px-3 pt-5">
          <div
            onClick={() => history.go(-1)}
            className="flex flex-row font-open-sans items-center gap-3 pt-2"
          >
            <div>
              <img src={leftArrow} alt="" className="h-4" />
            </div>
            <div className="font-bold tracking-wide">Go back</div>
          </div>

          <div className="pt-7">
            <div className="flex flex-col gap-5">
              <div className="font-bold font-open-sans text-2xl mb-2">
                New Invoice
              </div>

              {/* BILL FROM. */}
              <div className="text-[#7C5DFA] font-bold text-[18px] mb-5">
                Bill From
              </div>
            </div>

            {/* Form. */}
            <form action="" className="flex flex-col gap-5">
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

              {/* BILL TO. */}
              <div className="text-[#7C5DFA] font-bold text-[18px] mb-1 mt-6">
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
                  <input
                    type="text"
                    placeholder="United Kingdom"
                    className="invalid border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300 placeholder:tracking-wide"
                  />
                </div>

                {/* Project Description. */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="" className="text-[#3a15ce]">
                    Project Description
                  </label>
                  <input
                    type="text"
                    placeholder="Graphics Design"
                    className="invalid border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300 placeholder:tracking-wide"
                  />
                </div>
              </div>

              {/* ITEM LIST. */}
              <div className="text-[#2f206b] font-bold text-[18px] mb-1 mt-6">
                Item List
              </div>

              <div className="flex flex-col gap-16">
                {/* First Item Name. */}
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="" className="text-[#3a15ce]">
                      Item Name
                    </label>
                    <input
                      type="text"
                      placeholder="Banner Design"
                      className="border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300 placeholder:tracking-wide"
                    />
                  </div>
                  <div className="flex flex-row justify-between items-center px-1">
                    <div className="flex flex-row gap-4">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-[#3a15ce]">
                          Qty.
                        </label>
                        <input
                          type="text"
                          placeholder="Banner Design"
                          className="w-16 border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300 placeholder:tracking-wide"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-[#3a15ce]">
                          Price.
                        </label>
                        <input
                          type="text"
                          placeholder="Banner Design"
                          className="w-24 border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300 placeholder:tracking-wide"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="" className="mb-[17px] text-[#3a15ce]">
                          Total
                        </label>
                        <span className="font-extrabold text-[#7C5DFA] opacity-70">
                          156.00
                        </span>
                      </div>
                    </div>
                    <div>
                      <img src={deleteIcon} alt="" className="mt-[30px] w-4" />
                    </div>
                  </div>
                </div>

                {/* Second Item Name. */}
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="" className="text-[#3a15ce]">
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
                        <label htmlFor="" className="text-[#3a15ce]">
                          Qty.
                        </label>
                        <input
                          type="text"
                          placeholder="Banner Design"
                          className="w-16 border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300 placeholder:tracking-wide"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-[#3a15ce]">
                          Price.
                        </label>
                        <input
                          type="text"
                          placeholder="Banner Design"
                          className="w-24 border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300 placeholder:tracking-wide"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="" className="mb-[17px] text-[#3a15ce]">
                          Total
                        </label>
                        <span className="font-extrabold text-[#7C5DFA] opacity-70">
                          156.00
                        </span>
                      </div>
                    </div>
                    <div>
                      <img src={deleteIcon} alt="" className="mt-[30px] w-4" />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
