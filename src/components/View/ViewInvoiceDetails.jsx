import GoBack from "../ReUsable/GoBack";
import Header from "../Home/Header";
import Pending from "../ReUsable/Pending";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useContext, useEffect, useState } from "react";
import loadingImg from "../../assets/loading.svg";
import { AppContext } from "../../App";
import DeleteInvoiceModal from "./DeleteInvoiceModal";

export default function ViewInvoiceDetails() {
  const [open, setOpen] = useState(false); //control delete modal.
  const [dueDate, setDueDate] = useState(""); //payment due date.

  //api params.
  const params = useParams();
  const [invoiceDetails, setInvoiceDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  //change status.
  const { handleStatus, status } = useContext(AppContext);

  //display invoice details(api integration).
  async function viewInvoiceDetails() {
    const res = await fetch(
      "http://localhost:8000/api/show-invoice/" + params.id
    );

    const data = await res.json();
    console.log(data);
    setInvoiceDetails(data.data);

    //calculate payment due date.
    calculatePaymentDueDate(
      data.data.bill_to_invoice_date,
      data.data.bill_to_payment_terms
    );
    setLoading(false);
  }

  function calculatePaymentDueDate(invoiceDate, paymentTerm) {
    const daysToAdd = parseInt(paymentTerm.match(/\d+/)); // Extract number of days from "Net X Days"
    const dueDate = new Date(invoiceDate); //create an object instance of the invoiceDate in the Date format.
    dueDate.setDate(dueDate.getDate() + daysToAdd); // Add the extracted number of days to the invoice date

    // Get year, month, and day parts
    const year = dueDate.getFullYear();
    const day = dueDate.getDate();

    // Convert month number to month name
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = monthNames[dueDate.getMonth()]; // getMonth() returns 0-11

    // Format the date in "YYYY-MMM-DD"
    const formattedDate = `${year}-${month}-${day < 10 ? "0" + day : day}`; // Add leading zero for day if needed
    setDueDate(formattedDate);
  }

  useEffect(() => {
    viewInvoiceDetails();
  }, []);

  return (
    <div>
      <div>
        <div>
          <Header />
        </div>
        <div className="py-5 px-3">
          <GoBack />
        </div>
        {loading ? (
          <div className="flex justify-center items-center mt-44">
            <img src={loadingImg} alt="" className="w-8 animate-spin" />
          </div>
        ) : (
          <div>
            <div className="px-7 mt-5">
              <div className="flex flex-row border border-white bg-white justify-between p-5 py-7 rounded-lg shadow-sm items-center">
                <div className="opacity-80 text-[#7C5DFA] font-semibold">
                  Status
                </div>
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
            <div className="px-7 mt-5">
              <div className="border border-white bg-white shadow-sm rounded-lg px-5 py-5">
                <div>
                  <div className="flex flex-row font-bold text-[18px]">
                    <div className="font-bold text-[20px] flex flex-row">
                      <span className="text-[#7C5DFA]">#</span>
                      <div>RX</div>
                      <div>{invoiceDetails.item_list[0].id}</div>
                      <div>{invoiceDetails.id}</div>
                    </div>
                  </div>
                  <div className="opacity-80 text-[#7C5DFA] text-[16px] font-semibold">
                    {invoiceDetails.bill_to_project_desc}
                  </div>
                </div>
                <div className="opacity-80 text-[#7C5DFA] text-[16px] font-semibold flex flex-col mt-14 tracking-wide">
                  <div>{invoiceDetails.bill_from_street_address}</div>
                  <div>{invoiceDetails.bill_from_city}</div>
                  <div>{invoiceDetails.bill_from_post_code}</div>
                  <div>{invoiceDetails.bill_from_country}</div>
                </div>
                <div className="flex flex-row gap-10 mt-14 tracking-wide">
                  <div className="flex flex-col gap-14">
                    <div className="flex flex-col gap-2">
                      <div className="opacity-80 text-[#7C5DFA] text-[16px] font-semibold">
                        Invoice Date
                      </div>
                      <div className="font-bold text-[16px] text-nowrap">
                        {invoiceDetails.bill_to_invoice_date}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="opacity-80 text-[#7C5DFA] text-[16px] font-semibold">
                        Payment Due
                      </div>
                      <div className="font-bold text-[16px] text-nowrap">
                        {/* {invoiceDetails.bill_to_payment_terms} */}
                        {dueDate}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <div className="opacity-80 text-[#7C5DFA] text-[16px] font-semibold">
                        Bill To
                      </div>
                      <div className="font-bold text-[16px]">
                        {invoiceDetails.bill_to_client_name}
                      </div>
                    </div>
                    <div className="opacity-80 text-[#7C5DFA] text-[16px] font-semibold flex flex-col">
                      <div>{invoiceDetails.bill_to_street_address}</div>
                      <div>{invoiceDetails.bill_to_city}</div>
                      <div>{invoiceDetails.bill_to_post_code}</div>
                      <div>{invoiceDetails.bill_to_country}</div>
                    </div>
                  </div>
                </div>
                <div className="mt-14">
                  <div className="flex flex-col gap-2">
                    <div className="opacity-80 text-[#7C5DFA] text-[16px] font-semibold">
                      Sent to
                    </div>
                    <div className="font-bold text-[16px]">
                      {invoiceDetails.bill_to_client_email}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-7 mt-14 border border-transparent bg-slate-100 px-4 py-6 rounded-lg">
                  <div>
                    {invoiceDetails.item_list &&
                      invoiceDetails.item_list.map((item, index) => (
                        <div key={index}>
                          <div className="flex flex-row justify-between items-center py-3">
                            <div className="flex flex-col gap-1.5">
                              <div className="font-bold text-[16px]">
                                {item.item_name}
                              </div>
                              <div className="opacity-80 text-[#7C5DFA] text-[16px] font-bold tracking-tight">
                                {item.quantity + " x £ " + item.price + ".00"}
                              </div>
                            </div>
                            <div>
                              <div className="font-bold text-[16px] text-nowrap">
                                {"£ " + item.total + ".00"}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
                <div className="border border-transparent bg-[#373B53] text-white p-6 rounded-bl-lg rounded-br-lg">
                  <div className="flex flex-row justify-between items-center">
                    <div className="text-[14px]">Grand Total</div>
                    <div className="font-semibold text-[20px]">
                      {invoiceDetails.item_list &&
                        invoiceDetails.item_list.total}
                      {/* {invoiceDetails.item_list &&
                      invoiceDetails.item_list.length > 1
                        ? invoiceDetails.item_list.map((item, index) => (
                            <div key={index}>
                              {"£ " + item.total + item.total + ".00"}
                            </div>
                          ))
                        : invoiceDetails.item_list.map((item, index) => (
                            <div key={index}>{"£ " + item.total + ".00"}</div>
                          ))} */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {!loading && (
          <div className="flex flex-row justify-between border border-white bg-white mt-14 py-6 px-4">
            <div className="border border-transparent text-[#564791] bg-[#776e9c] rounded-full p-3 bg-opacity-30 font-bold px-5 cursor-pointer">
              Edit
            </div>
            <div
              onClick={() => setOpen(true)}
              className="border border-transparent text-[#ffff] bg-red-500 rounded-full p-3 font-bold px-5 cursor-pointer"
            >
              Delete
            </div>
            <div
              onClick={handleStatus}
              className="border border-transparent text-[#ffff] bg-blue-500 rounded-full p-3 font-bold px-5 cursor-pointer"
            >
              Mark as Paid
            </div>
          </div>
        )}
      </div>

      <DeleteInvoiceModal
        open={open}
        setOpen={setOpen}
        invoiceDetails={invoiceDetails}
      />
    </div>
  );
}
