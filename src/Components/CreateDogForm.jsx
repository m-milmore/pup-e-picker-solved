import { useState } from "react";
import { dogPictures } from "../assets/dog-pictures";
import { nanoid } from "nanoid";
import { SECTION_INIT } from "./Section";

export const CreateDogForm = ({ setDogs, setSectionBtns }) => {
  const [newDog, setNewDog] = useState({
    name: "doggie",
    image: "/src/assets/blue-heeler.png",
    description: "doogy doogy",
    isFavorite: true,
    id: nanoid(),
  });

  const handleOnChange = (e) => {
    const value = e.target.value;
    setNewDog({ ...newDog, [e.target.name]: value });
  };

  const handleSelect = ({ target: { value } }) => {
    setNewDog({ ...newDog, image: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newDog.name === "" || newDog.description === "")
      alert("Form incomplete");
    else {
      setDogs((prev) => [newDog, ...prev]);
      setSectionBtns(SECTION_INIT);
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const raw = JSON.stringify(newDog);
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      fetch(`http://localhost:3000/dogs`, requestOptions)
        .then((response) => response.json())
        .then((result) => alert("New dog successfully added!"))
        .catch((error) => console.log("error = ", error));
    }
  };

  return (
    <form action="" id="create-dog-form" onSubmit={handleSubmit}>
      <h4>Create a New Dog</h4>
      <label htmlFor="name">Dog Name</label>
      <input
        type="text"
        name="name"
        value={newDog.name}
        onChange={handleOnChange}
      />
      <label htmlFor="description">Dog Description</label>
      <textarea
        name="description"
        id=""
        cols="80"
        rows="10"
        value={newDog.description}
        onChange={handleOnChange}
      ></textarea>
      <label htmlFor="picture">Select an Image</label>
      <select id="" onChange={handleSelect} style={{ cursor: "pointer" }}>
        {Object.entries(dogPictures).map(([label, pictureValue]) => {
          return (
            <option value={pictureValue} key={pictureValue}>
              {label}
            </option>
          );
        })}
      </select>
      <input type="submit" value="submit" style={{ cursor: "pointer" }} />
    </form>
  );
};
