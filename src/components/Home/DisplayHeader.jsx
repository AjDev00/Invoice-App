import arrowDown from "../../assets/icon-arrow-down.svg";
import plus from "../../assets/icon-plus.svg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import DisplayInvoices from "./DisplayInvoices";
import { displayDrafts, displayInvoices } from "../../services/invoiceServices";
import { useContext, useEffect, useState } from "react";
import loadingImg from "../../assets/loading.svg";
import EmptyInvoice from "./EmptyInvoice";
import DisplayDrafts from "./DisplayDrafts";
import { AppContext } from "../../App";

export default function DisplayHeader() {
  //invoice params.
  const { invoices, setInvoices } = useContext(AppContext);
  const [countInvoice, setCountInvoice] = useState("");

  //draft params.
  const { drafts, setDrafts } = useContext(AppContext);
  const [countDraft, setCountDraft] = useState("");

  const [loading, setLoading] = useState(true);

  //display all invoices.
  async function displayAllInvoices() {
    const data = await displayInvoices();

    console.log(data);
    setInvoices(data.data);
    setCountInvoice(data.total_count);
    setLoading(false);
  }

  //display all drafts.
  async function displayAllDrafts() {
    const data = await displayDrafts();

    console.log(data);
    setDrafts(data.data);
    setCountDraft(data.draft_count);
  }

  useEffect(() => {
    displayAllInvoices();
    displayAllDrafts();
  }, []);

  return (
    <div className="pb-10">
      <div className="flex flex-row justify-between px-3 pt-7 items-center">
        <div className="font-bold">
          <div className="text-[24px] tracking-tight">Invoices</div>
          <div className="opacity-65 text-[14px]">
            {invoices &&
            invoices.length === 0 &&
            countInvoice === 0 &&
            countDraft === 0
              ? "No Invoices"
              : countInvoice + countDraft + " invoices"}
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <div className="flex flex-row justify-center items-center gap-2">
            <div className="font-bold text-[18px] tracking-wide">Filter</div>
            <img src={arrowDown} alt="" className="w-3 h-2" />
          </div>
          <Link to="/create-invoice">
            <div className="flex flex-row justify-center items-center border border-transparent bg-[#7C5DFA] rounded-full p-0 px-2 py-2.5 gap-2">
              <div className="border border-white bg-white p-1 rounded-full">
                <img src={plus} alt="" className="w-3 h-3" />
              </div>
              <div className="text-white font-semibold tracking-wide">New</div>
            </div>
          </Link>
        </div>
      </div>

      {/* display this if no invoice has been created. */}
      <div className="">
        {loading && (
          <div className="flex justify-center items-center">
            <img src={loadingImg} alt="" className="w-8 animate-spin mt-44" />
          </div>
        )}
        {invoices &&
          invoices.length === 0 &&
          countInvoice === 0 &&
          countDraft === 0 && <EmptyInvoice />}
      </div>

      {/* //otherwise this.. */}
      {!loading &&
        invoices &&
        invoices.map((invoice, index) => {
          return (
            <div key={index}>
              {loading && (
                <div className="flex justify-center items-center">
                  <img src={loadingImg} alt="" className="w-8 animate-spin" />
                </div>
              )}

              {!loading && <DisplayInvoices invoice={invoice} />}
            </div>
          );
        })}

      {!loading &&
        drafts &&
        drafts.map((draft, index) => {
          return (
            <div key={index}>
              <DisplayDrafts draft={draft} />
            </div>
          );
        })}
    </div>
  );
}
