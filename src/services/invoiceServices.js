//create invoices api.
export const createInvoice = async (data) => {
  const res = await fetch("http://localhost:8000/api/invoices", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
};

//create item-list api.
export const createItemLists = async (data) => {
  const res = await fetch("http://localhost:8000/api/item-list", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
};

//create drafts api.
export const createDraft = async (data) => {
  const res = await fetch("http://localhost:8000/api/drafts", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
};

//create drafts-item api.
export async function createItemDraft(data) {
  const res = await fetch("http://localhost:8000/api/draft-item", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
}

//display all invoices.
export async function displayInvoices() {
  const res = await fetch("http://localhost:8000/api/invoices");

  return await res.json();
}

//display a single invoice.
export async function viewInvoiceDetails(id) {
  const res = await fetch("http://localhost:8000/api/show-invoice/" + id);

  return await res.json();
}

//display all drafts.
export async function displayDrafts() {
  const res = await fetch("http://localhost:8000/api/drafts");

  return await res.json();
}

//display a single drafts.
export async function viewDraftDetails(id) {
  const res = await fetch("http://localhost:8000/api/show-drafts/" + id);

  return await res.json();
}

//update a single invoice.
export async function updateInvoice(data, id) {
  const res = await fetch("http://localhost:8000/api/edit-invoice/" + id, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
}

//update item-list.
export async function updateItemList(data, id) {
  const res = await fetch("http://localhost:8000/api/edit-item/" + id, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
}

//get invoice data.
export async function getInvoiceById(id) {
  const res = await fetch("http://localhost:8000/api/show-invoice/" + id);

  return await res.json();
}

//get item-list data.
export async function getItemListById(id) {
  const res = await fetch("http://localhost:8000/api/get-item-list/" + id);

  return await res.json();
}

//delete a specific/single draft.
export async function deleteDraft(id) {
  const res = await fetch("http://localhost:8000/api/delete-draft/" + id, {
    method: "DELETE",
  });

  return res.json();
}

//get draft-item data.
export async function getDraftItemById(id) {
  const res = await fetch("http://localhost:8000/api/get-draft-item/" + id);

  return await res.json();
}

//update a single draft.
export async function updateDraft(data, id) {
  const res = await fetch("http://localhost:8000/api/edit-draft/" + id, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
}

//update draft-item.
export async function updateDraftItem(data, id) {
  const res = await fetch("http://localhost:8000/api/edit-draft-item/" + id, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
}

// export async function deleteItemList(id) {
//   const res = await fetch("http://localhost:8000/api/delete-item/" + id, {
//     method: "DELETE",
//   });

//   return res.json();
// }
