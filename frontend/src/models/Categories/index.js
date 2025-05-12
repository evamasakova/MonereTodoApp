const apiv = import.meta.env.VITE_APIV;
const port = import.meta.env.VITE_PORT;

export const getAllCategories = async () => {
  const req = await fetch(`http://localhost:${port}/v${apiv}/categories/list`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "GET",
  });
  const data = await req.json();
  return {
    status: req.status,
    payload: data.payload,
    msg: data.msg,
  };
};
export const createCategory = async (formData) => {
  const req = await fetch(
    `http://localhost:${port}/v${apiv}/categories/create-category`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(formData),
    }
  );
  const data = await req.json();
  return {
    status: req.status,
    payload: data.payload,
    msg: data.msg,
    errors: data.errors,
  };
};
export const getCategoryById = async (id) => {
  const req = await fetch(`http://localhost:${port}/v${apiv}/categories/${id}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "GET",
  });
  const data = await req.json();
  return {
    status: req.status,
    payload: data.payload,
    msg: data.msg,
  };
};
export const getCategoryMap = async () => {
  const req = await fetch(`http://localhost:${port}/v${apiv}/tasks/list`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "GET",
  });
  const data = await req.json();
  return {
    status: req.status,
    payload: data.payload,
    msg: data.msg,
  };
};
