export default function Draft() {
  return (
    <div>
      <div className="flex flex-row gap-2 rounded-lg border border-transparent justify-center items-center px-4 p-3 bg-slate-100 dark:bg-slate-500 dark:bg-opacity-15">
        <div className="border border-transparent rounded-full bg-[#0f0c0bd7] p-1 h-2 animate-pulse dark:bg-white dark:opacity-75"></div>
        <div className="text-[#0f0c0bd7] font-bold tracking-wide dark:text-white dark:opacity-75">
          Draft
        </div>
      </div>
    </div>
  );
}
