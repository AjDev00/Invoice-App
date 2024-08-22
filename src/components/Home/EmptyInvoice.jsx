import empty from "../../assets/illustration-empty.svg";

export default function EmptyInvoice() {
  return (
    <div>
      <div>
        <div className="flex flex-col justify-center items-center pt-20 px-5 gap-7">
          <div className="">
            <img src={empty} alt="" className="" />
          </div>
          <div className="font-semibold flex flex-col justify-center items-center gap-6">
            <div className="text-3xl text-nowrap">There is nothing here</div>
            <div className="opacity-65 text-center text-[16px]">
              Create and invoice by clicking the <strong>New</strong> button and
              get started
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
