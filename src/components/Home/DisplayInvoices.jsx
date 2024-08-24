import { Link } from "react-router-dom/cjs/react-router-dom.min";
// import Pending from "../ReUsable/Pending";
import { useContext } from "react";
import { AppContext } from "../../App";

export default function DisplayInvoices({ invoice }) {
  const { status } = useContext(AppContext);

  return (
    <div>
      <div className="px-4 mt-7">
        <Link to={`/invoice-details/${invoice.id}`}>
          <div className="cursor-pointer border border-white bg-white rounded-md shadow-sm p-4 flex flex-col py-7 gap-4 mb-5">
            <div className="flex flex-row justify-between items-center">
              <div className="font-bold text-[20px] flex flex-row">
                <span className="text-[#7C5DFA]">#</span>
                <div>RX</div>
                <div>{invoice.item_list[0].id}</div>
                <div>{invoice.id}</div>
              </div>
              <div className="opacity-80 text-[#7C5DFA]">
                {invoice.bill_to_client_name}
              </div>
            </div>
            <div className="mt-5 flex flex-row justify-between">
              <div className="flex flex-col gap-2">
                <div className="opacity-80 text-[#7C5DFA]">
                  {"Due " + invoice.bill_to_invoice_date}
                </div>
                <div className="font-bold text-[20px]">
                  {invoice.item_list &&
                    invoice.item_list.map((item, index) => (
                      <div key={index}>{"£ " + item.total + ".00"}</div>
                    ))}
                </div>
              </div>
              <div className="flex flex-row gap-2 rounded-lg border border-transparent justify-center items-center">
                <div>
                  {!status ? (
                    <div className="flex flex-row gap-2 rounded-lg border border-transparent justify-center items-center px-4 p-3 bg-orange-50">
                      <div className="border border-transparent rounded-full bg-[#f59366d7] p-1 h-2 animate-pulse"></div>
                      <div className="text-[#f59366d7] font-bold tracking-wide">
                        Pending
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-row gap-2 rounded-lg border border-transparent justify-center items-center px-4 p-3 bg-green-50">
                      <div className="border border-transparent rounded-full bg-green-500 p-1 h-2 animate-pulse"></div>
                      <div className="text-green-500 font-bold tracking-wide">
                        Paid
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
