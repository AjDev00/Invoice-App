import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { BillFrom, BillTo, TCustomModal } from "../New";
import { useForm, useFieldArray, useWatch } from "react-hook-form";
import Header from "../Home/Header";
import { useState } from "react";
import deleteIcon from "../../assets/icon-delete.svg";
import {
  createDraft,
  createInvoice,
  createItemLists,
  createItemDraft,
} from "../../services/invoiceServices";
import AddNewItem from "../Home/AddNewItem";
import GoBack from "../ReUsable/GoBack";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const defaultBill = {
  bill_from_street_address: "",
  bill_from_city: "",
  bill_from_post_code: "",
  bill_from_country: "",
  bill_to_client_name: "",
  bill_to_client_email: "",
  bill_to_street_address: "",
  bill_to_city: "",
  bill_to_post_code: "",
  bill_to_country: "",
  bill_to_invoice_date: "",
  bill_to_payment_terms: "Net 30 Days",
  bill_to_project_desc: "",
  item_list: [{ item_name: "", quantity: 1, price: 0 }],
};

export default function CreateInvoice() {
  const [open, setOpen] = useState(false); //control discard modal.
  const history = useHistory();

  //react-hook form params.
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    clearErrors,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: { ...defaultBill },
  });

  //useField.
  const { fields, append, remove } = useFieldArray({
    control, // name of the array in defaultValues
    name: "item_list", // name of the item in the defaultValue  => defaultBill
    rules: { minLength: 1 },
  });

  //useWatch
  const watchedItems = useWatch({
    control,
    name: "item_list", // watch all items in the form
  });

  //calculate total.
  const calculateTotal = (index) => {
    const item = watchedItems[index];
    return item?.quantity && item?.price ? item.quantity * item.price : 0;
  };

  //save to draft.
  async function submitDraft() {
    clearErrors();

    const draftData = getValues();
    const sendDraftData = await createDraft(draftData);

    // Ensure data.items is correctly structured for backend.
    const itemNames = draftData.item_list.map((item) => item.item_name);
    const quantities = draftData.item_list.map((item) => item.quantity);
    const prices = draftData.item_list.map((item) => item.price);
    const totals = draftData.item_list.map(
      (item) => item.quantity * item.price
    );

    // Get and Insert the foreign key.
    const draftId = sendDraftData.draft_id;

    // Structure everything into one object.
    const finalData = {
      draft_id: draftId,
      item_name: itemNames,
      quantity: quantities,
      price: prices,
      total: totals,
    };

    //Save item-lists to draft also if included.
    const itemDraftData = await createItemDraft(finalData);

    if (sendDraftData.status === false) {
      toast(sendDraftData.message);
    } else if (itemDraftData.status === false) {
      toast(itemDraftData.message);
    } else {
      toast("Saved as Draft!");
      history.push("/");
    }
  }

  //-- insert/create invoices
  async function onSubmit(data) {
    console.log("Original Data:", data);

    // Ensure data.items is correctly structured for backend
    const itemNames = data.item_list.map((item) => item.item_name);
    const quantities = data.item_list.map((item) => item.quantity);
    const prices = data.item_list.map((item) => item.price);
    const totals = data.item_list.map((item) => item.quantity * item.price);

    // Send data for invoice creation
    const invoiceData = await createInvoice(data);
    console.log("Invoice Data:", invoiceData);

    //Get and Insert the foreign key.
    const invoiceId = invoiceData.invoice_id;

    // Prepare the finalData for item lists creation
    const finalData = {
      invoice_id: invoiceId,
      item_name: itemNames,
      quantity: quantities,
      price: prices,
      total: totals,
    };

    console.log("Final Data Sent to createItemLists:", finalData);

    // Send data for item list creation
    const itemListData = await createItemLists(finalData);

    if (invoiceData.status === false) {
      toast(invoiceData.message);
    } else if (itemListData.status === false) {
      toast(itemListData.message);
    } else {
      toast("Invoice created successfully");
      history.push("/");
    }
  }

  return (
    <div>
      <div className="mb-10">
        <div>
          <Header />
        </div>
        <div className="px-3 pt-5">
          <GoBack />

          <div className="pt-10">
            <div className="flex flex-col gap-5">
              <div className="font-bold font-open-sans text-2xl mb-2">
                New Invoice
              </div>
              <div className="text-[#7C5DFA] font-bold text-[18px] mb-5">
                Bill From
              </div>
            </div>

            {/* Form. */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-5"
            >
              <span>
                <BillFrom register={register} errors={errors} />
              </span>
              <span>
                <BillTo register={register} errors={errors} />
              </span>

              {/*Form mapping - item list. */}
              <div>
                <div className="text-[#2f206b] font-bold text-[18px] mb-4 mt-6">
                  Item List
                </div>
                <div>
                  <div className="flex flex-col gap-16">
                    <div>
                      {fields.map((item, index) => (
                        <div
                          key={item.id}
                          className="flex flex-col gap-6 mb-10"
                        >
                          {/* Item Name. */}
                          <div className="flex flex-col gap-2">
                            <label htmlFor="" className="text-[#2f206b]">
                              Item Name
                            </label>
                            <input
                              type="text"
                              {...register(`item_list.${index}.item_name`, {
                                required: true,
                              })}
                              placeholder="Banner Design"
                              className="border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300 placeholder:tracking-wide"
                            />
                            {errors.item_list?.[index]?.item_name && (
                              <p className="text-red-500 font-semibold">
                                Item name is required!
                              </p>
                            )}
                          </div>

                          <div className="flex flex-row justify-between items-center px-1">
                            <div className="flex flex-row gap-4">
                              {/* Quantity. */}
                              <div className="flex flex-col gap-2">
                                <label htmlFor="" className="text-[#2f206b]">
                                  Qty.
                                </label>
                                <input
                                  type="number"
                                  placeholder="1"
                                  {...register(`item_list.${index}.quantity`, {
                                    required: true,
                                  })}
                                  className="w-16 border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300 placeholder:tracking-wide"
                                />
                                {errors.item_list?.[index]?.quantity && (
                                  <p className="text-red-500 font-semibold">
                                    Quantity is required!
                                  </p>
                                )}
                              </div>

                              {/* Price. */}
                              <div className="flex flex-col gap-2">
                                <label htmlFor="" className="text-[#2f206b]">
                                  Price
                                </label>
                                <input
                                  type="number"
                                  placeholder="156.00"
                                  {...register(`item_list.${index}.price`, {
                                    required: true,
                                  })}
                                  className="w-24 border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300 placeholder:tracking-wide"
                                />
                                {errors.item_list?.[index]?.price && (
                                  <p className="text-red-500 font-semibold">
                                    Price is required!
                                  </p>
                                )}
                              </div>

                              {/* Total. */}
                              <div className="flex flex-col gap-2">
                                <label
                                  htmlFor=""
                                  className="mb-[17px] text-[#2f206b]"
                                >
                                  Total
                                </label>
                                <span className="font-extrabold text-[#7C5DFA] opacity-70">
                                  {calculateTotal(index).toFixed(2)}
                                </span>
                              </div>
                            </div>

                            {/* Delete Icon. */}
                            {index > 0 && (
                              <div onClick={() => remove(index)}>
                                <img
                                  src={deleteIcon}
                                  alt=""
                                  className="mt-[30px] w-4 cursor-pointer"
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Add New Btn. */}
              <AddNewItem
                handleAddNewItemClick={() =>
                  append({ item_name: "", quantity: 1, price: 0 })
                }
              />

              {/* Other Btns. */}
              <div className="flex flex-row justify-between pt-8 border-t-2">
                <div
                  onClick={() => setOpen(true)}
                  className="border border-transparent text-[#564791] bg-[#776e9c] rounded-full p-2 bg-opacity-30 font-bold px-3 cursor-pointer"
                >
                  Discard
                </div>
                <div
                  onClick={submitDraft}
                  className="border border-transparent text-[#78738d] bg-[#2f206b] rounded-full p-2 font-bold px-3 cursor-pointer"
                >
                  Save as Draft
                </div>
                <button
                  type="submit"
                  className="border border-transparent text-white bg-[#3b1cb6] rounded-full p-2 font-semibold px-3 cursor-pointer"
                >
                  Save & Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* //Tailwind custom Modal. */}
      <TCustomModal open={open} setOpen={setOpen} />
    </div>
  );
}
