const folderUrl = "http://localhost:3001/api/folders";

const getAll = async () => {
  const response = await fetch(folderUrl);
  return await response.json();
};

const create = async (newObject) => {
  const response = await fetch(folderUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newObject),
  });
  return await response.json();
};

const update = async (id, newObject) => {
  const response = await fetch(`${folderUrl}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newObject),
  });
  return await response.json();
};
const remove = async (id) => {
  const response = await fetch(`${folderUrl}/${id}`, {
    method: "DELETE",
  });
  return response.status;
};

const exportedObject = { getAll, create, update, remove };
export default exportedObject;
