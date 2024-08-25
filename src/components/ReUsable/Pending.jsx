import { useContext, useState } from "react";
import { AppContext } from "../../App";

export default function Pending({ invoiceId }) {
  const { invoiceStatuses } = useContext(AppContext);
  const status = invoiceStatuses[invoiceId];

  return (
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
          <div className="text-green-500 font-bold tracking-wide">Paid</div>
        </div>
      )}
    </div>
  );
}
