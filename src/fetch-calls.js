const BASE_URL = "http://localhost:3000/dogs/";

export const getAllDogsFetch = async () => {
  const response = await fetch(BASE_URL);
  return await response.json();
};

export const createDogFetch = async (dog) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dog),
  });
  return await response.json();
};

export const updateDogFetch = async (id, prop2Update) => {
  return fetch(BASE_URL + id, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(prop2Update),
  });
};

export const deleteDogFetch = (id) => {
  return fetch(BASE_URL + id, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
};
