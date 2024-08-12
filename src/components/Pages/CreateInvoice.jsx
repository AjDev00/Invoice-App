import Header from "../Home/Header";
import leftArrow from "../../assets/icon-arrow-left.svg";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function CreateInvoice() {
  const history = useHistory();
  return (
    <div>
      <div className="duration-300">
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
              <div className="font-bold font-open-sans text-2xl">
                New Invoice
              </div>
              <div className="text-[#7C5DFA] font-bold text-[18px] mb-5">
                Bill Form
              </div>
            </div>
            <form action="" className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-[#3a15ce]">
                  Street Address
                </label>
                <input
                  type="text"
                  placeholder="19 Union Terrace"
                  className="border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300"
                />
              </div>
              <div className="flex flex-row gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="" className="text-[#3a15ce]">
                    City
                  </label>
                  <input
                    type="text"
                    placeholder="London"
                    className="border border-[#7C5DFA] p-4 rounded-md border-opacity-70 font-bold focus:outline-[#7C5DFA] w-40 outline-transparent focus:duration-300"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="" className="text-[#3a15ce]">
                    Post Code
                  </label>
                  <input
                    type="text"
                    placeholder="E1 3EZ"
                    className="border border-[#7C5DFA] p-4 rounded-md border-opacity-70 font-bold focus:outline-[#7C5DFA] w-40 outline-transparent duration-300"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
