import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Pending from "../ReUsable/Pending";
import iconRight from "../../assets/icon-arrow-right.svg";

export default function DisplayInvoices({ invoice }) {
  return (
    <div>
      <div className="px-4 mt-7">
        <Link to={`/invoice-details/${invoice.id}`}>
          <div className="cursor-pointer border border-white bg-white dark:border-transparent dark:bg-[#373B53] rounded-md shadow-sm p-4 flex flex-col py-7 gap-4 mb-5 md:hidden hover:border-[#7C5DFA] duration-300 dark:hover:border-white">
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
              <div className="flex flex-col gap-2 md:flex-row">
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

          {/* larger screen. */}
          <div className="md:flex justify-between items-center cursor-pointer border border-white bg-white dark:border-transparent dark:bg-[#373B53] rounded-md shadow-sm p-4 w-full mb-4 hidden hover:border-[#7C5DFA] dark:hover:border-white duration-300">
            {/* Invoice ID */}
            <div className="font-bold text-[15px] flex items-center">
              <span className="text-[#7C5DFA]">#</span>
              <div>RX</div>
              <div>{invoice.item_list[0].id}</div>
              <div>{invoice.id}</div>
            </div>

            {/* Client Name */}
            <div className="opacity-80 text-[#7C5DFA] flex-1 text-center ml-10 dark:text-white">
              {invoice.bill_to_client_name}
            </div>

            {/* Date */}
            <div className="md:hidden lg:flex opacity-80 text-[#7C5DFA] flex-1 text-center ml-10 dark:opacity-100 dark:font-bold">
              {"Date " + invoice.bill_to_invoice_date}
            </div>
            <div className="md:flex lg:hidden opacity-80 text-[#7C5DFA] flex-1 text-center ml-10 dark:opacity-100 dark:font-bold">
              {invoice.bill_to_invoice_date}
            </div>

            {/* Total Amount */}
            <div className="font-bold text-[15px] flex flex-row gap-1 items-center flex-1 text-right ml-24">
              <div>£</div>
              <div className="flex flex-row items-end justify-end">
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

            {/* Status Badge */}
            <div className="text-right">
              <Pending invoiceId={invoice.id} />
            </div>

            {/* Arrow Icon */}
            <div className="ml-4">
              <img src={iconRight} alt="Right arrow" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
