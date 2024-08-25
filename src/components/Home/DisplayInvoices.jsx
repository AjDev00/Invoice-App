import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Pending from "../ReUsable/Pending";

export default function DisplayInvoices({ invoice }) {
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
                  {invoice.bill_to_invoice_date}
                </div>
                <div className="font-bold text-[20px] flex flex-row gap-1">
                  <div>£</div>
                  <div className="flex flex-row">
                    <div>
                      {invoice.item_list && invoice.item_list.length > 0
                        ? invoice.item_list.reduce((sum, item) => {
                            return sum + parseFloat(item.total);
                          }, 0)
                        : ""}
                    </div>
                    <div>.00</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-2 rounded-lg border border-transparent justify-center items-center">
                <div>
                  <Pending invoiceId={invoice.id} />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
