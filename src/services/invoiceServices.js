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
