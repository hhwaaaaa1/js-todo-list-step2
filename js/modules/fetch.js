const API_URL = "https://js-todo-list-9ca3a.df.r.appspot.com/api";

export const getData = async (url) => {
  try {
    const response = await fetch(`${API_URL}${url}`);
    const json = await response.json();
    return json;
  } catch (error) {
    handleError(error);
  }
};

export const setData = async (url, payload) => {
  try {
    const response = await fetch(`${API_URL}${url}`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const json = await response.json();
    return json;
  } catch (error) {
    handleError(error);
  }
};

export const deleteData = async (url) => {
  try {
    const response = await fetch(`${API_URL}${url}`, {
      method: "delete",
    });
    const json = await response.json();
    return json;
  } catch (error) {
    handleError(error);
  }
};

export const updateData = async (url, payload) => {
  try {
    const response = await fetch(`${API_URL}${url}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const json = await response.json();
    return json;
  } catch (error) {
    handleError(error);
  }
};

function handleError({ message }) {
  console.error(message);
}
