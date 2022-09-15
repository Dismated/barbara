const productUrl = "http://localhost:3001/api/folders";

const getAll = async () => {
  const response = await fetch(productUrl);
  return await response.json();
};

const create = async (newObject) => {
  const response = await fetch(productUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newObject),
  });
  return await response.json();
};

const update = async (id, newObject) => {
  const response = await fetch(`${productUrl}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newObject),
  });
  return await response.json();
};
const remove = async (id) => {
  const response = await fetch(`${productUrl}/${id}`, {
    method: "DELETE",
  });
  return response.status;
};

const exportedObject = { getAll, create, update, remove };
export default exportedObject;
