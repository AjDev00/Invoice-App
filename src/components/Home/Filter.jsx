export default function Filter({ filter }) {
  return (
    <div>
      <div>
        {filter && (
          <div className="absolute flex flex-col gap-7 font-semibold text-[17px] right-0 border border-transparent shadow-lg p-2 bg-slate-100 w-44 z-10 px-4 mr-4 mt-2 py-7 rounded-lg">
            <div className="text-green-500 opacity-80 cursor-pointer">Paid</div>
            <div className="text-[#f59366d7] opacity-80 cursor-pointer">
              Pending
            </div>
            <div className="text-[#0f0c0bd7] opacity-80 cursor-pointer">
              Draft
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
