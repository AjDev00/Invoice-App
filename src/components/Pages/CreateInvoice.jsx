import Header from "../Home/Header";
import leftArrow from "../../assets/icon-arrow-left.svg";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import AddNewItem from "../Home/AddNewItem";
import { createContext, useContext, useRef, useState } from "react";
import { AppContext } from "../../App";
import BillFrom from "../New/BillFrom";
import BillTo from "../New/BillTo";
import ItemList from "../New/ItemList";

export const CreateInvoiceContext = createContext();
export default function CreateInvoice() {
  const history = useHistory();

  const [items, setItems] = useState([]);

  function handleAddNewItemClick() {
    setItems([...items, { itemName: "", Qty: "", Price: "", Total: "" }]);
    console.log("clicked");
  }

  return (
    <CreateInvoiceContext.Provider value={{ items, handleAddNewItemClick }}>
      <div>
        <div className="mb-10">
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

            <div className="pt-10">
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
                <span>
                  <BillFrom />
                </span>
                <span>
                  <BillTo />
                </span>

                {/* ITEM LIST. */}
                <div>
                  <div className="text-[#2f206b] font-bold text-[18px] mb-4 mt-6">
                    Item List
                  </div>
                  <div>
                    <ItemList />
                  </div>
                </div>

                {/* Add New Button. */}
                <AddNewItem />

                <div className="flex flex-row justify-between pt-8 border-t-2">
                  <div className="border border-transparent text-[#564791] bg-[#776e9c] rounded-full p-2 bg-opacity-30 font-bold px-3 cursor-pointer">
                    Discard
                  </div>
                  <div className="border border-transparent text-[#78738d] bg-[#2f206b] rounded-full p-2 font-bold px-3 cursor-pointer">
                    Save as Draft
                  </div>
                  <button
                    type="submit"
                    className="border border-transparent text-white bg-[#3b1cb6] rounded-full p-2 font-semibold px-3 cursor-pointer"
                  >
                    Save & Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </CreateInvoiceContext.Provider>
  );
}
