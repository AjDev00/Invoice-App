import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Draft from "../ReUsable/Draft";

export default function DisplayDrafts({ draft }) {
  return (
    <div>
      <div className="px-4 mt-7">
        <Link to={`/draft-details/${draft.id}`}>
          <div className="cursor-pointer border border-white bg-white rounded-md shadow-sm p-4 flex flex-col py-7 gap-4 mb-5">
            <div className="flex flex-row justify-between items-center">
              <div className="font-bold text-[20px] flex flex-row">
                <span className="text-[#7C5DFA]">#</span>
                <div>XM</div>
                <div>{draft.draft_item[0].id}</div>
                <div>{draft.id}</div>
              </div>
              <div className="opacity-80 text-[#7C5DFA]">
                {draft.bill_to_client_name}
              </div>
            </div>
            <div className="mt-5 flex flex-row justify-between">
              <div className="flex flex-col gap-2">
                <div className="opacity-80 text-[#7C5DFA]">
                  {"Due " + draft.bill_to_invoice_date}
                </div>
                <div className="font-bold text-[20px]">
                  {draft.draft_item &&
                    draft.draft_item.map((item, index) => (
                      <div key={index}>{"£ " + item.total + ".00"}</div>
                    ))}
                </div>
              </div>
              <div className="flex flex-row gap-2 rounded-lg border border-transparent justify-center items-center bg-slate-100">
                <Draft />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
