const apiv = import.meta.env.VITE_APIV;
const port = import.meta.env.VITE_PORT;
export const getAllTasks = async () => {
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
export const getAllInactiveTasks = async () => {
  const req = await fetch(`http://localhost:${port}/v${apiv}/tasks/inactive`, {
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
export const getAllActiveTasks = async () => {
  const req = await fetch(`http://localhost:${port}/v${apiv}/tasks/active`, {
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
export const createTask = async (formData) => {
  const req = await fetch(`http://localhost:${port}/v${apiv}/tasks/create-task`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(formData),
  });
  const data = await req.json();
  return {
    status: req.status,
    payload: data.payload,
    msg: data.msg,
    errors: data.errors,
  };
};
export const getTaskById = async (id) => {
  const req = await fetch(`http://localhost:${port}/v${apiv}/tasks/${id}`, {
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
export const checkOff = async (id) => {
  const req = await fetch(`http://localhost:${port}/v${apiv}/tasks/deactivate/${id}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "PUT",
  });
  const data = await req.json();
  return {
    status: req.status,
    payload: data.payload,
    msg: data.msg,
  };
};
export const getTasksByCategoryID = async (categoryId) => {
  const req = await fetch(`http://localhost:${port}/v${apiv}/tasks/category/${categoryId}`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    }
  );
  const data = await req.json();
  return {
    status: req.status,
    payload: data.payload,
    msg: data.msg,
  };
};
