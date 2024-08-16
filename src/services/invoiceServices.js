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
