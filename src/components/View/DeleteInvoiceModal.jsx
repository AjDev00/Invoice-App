import React, { useContext, useEffect } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { BsExclamationTriangleFill } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import { AppContext } from "../../App";
import { toast } from "react-toastify";

const DeleteInvoiceModal = ({ open, setOpen, invoiceDetails, invoices }) => {
  const history = useHistory();

  const { setInvoices } = useContext(AppContext);

  //delete an invoice(api integration).
  async function deleteInvoice(id) {
    const res = await fetch("http://localhost:8000/api/delete-invoice/" + id, {
      method: "DELETE",
    });
    const data = await res.json();

    if (data.status === true) {
      const newInvoices =
        invoices && invoices.filter((invoice) => invoice.id != id);

      setInvoices(newInvoices);
      toast("Invoice deleted successfully!");
      history.push("/");
    } else {
      toast("Unable to delete");
    }
  }

  return (
    <div>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <BsExclamationTriangleFill
                      aria-hidden="true"
                      className="h-6 w-6 text-red-600"
                    />
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <DialogTitle
                      as="h3"
                      className="text-base font-semibold leading-6 text-gray-900"
                    >
                      Confirm Deletion
                    </DialogTitle>
                    <div className="mt-2">
                      <div className="text-sm text-gray-500">
                        Are you sure you want to delete this invoice? <br />{" "}
                        <div className="flex flex-row">
                          <div className="font-bold flex flex-row">
                            <span className="text-[#7C5DFA]">#</span>
                            <div>RX</div>
                            <div>
                              {invoiceDetails.item_list &&
                                invoiceDetails.item_list[0].id}
                            </div>
                            <div>{invoiceDetails.id + "?"}</div>
                          </div>
                          <div>This action cannot be undone.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  onClick={() => deleteInvoice(invoiceDetails.id)}
                  className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                >
                  Continue
                </button>
                <button
                  type="button"
                  data-autofocus
                  onClick={() => setOpen(false)}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default DeleteInvoiceModal;
