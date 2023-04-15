import { useState } from "react";
import { dogPictures } from "../assets/dog-pictures";
import { SECTION_INIT } from "./Section";

export const CreateDogForm = ({ setSectionBtns, addDog }) => {
  const [nameInput, setNameInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [imageInput, setImageInput] = useState("/src/assets/blue-heeler.png");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nameInput === "" || descriptionInput === "") {
      alert("Form incomplete");
      return;
    }

    setSectionBtns(SECTION_INIT);
    addDog({
      name: nameInput,
      image: imageInput,
      description: descriptionInput,
      isFavorite: true,
    });
  };

  return (
    <form action="" id="create-dog-form" onSubmit={handleSubmit}>
      <h4>Create a New Dog</h4>
      <label htmlFor="name">Dog Name</label>
      <input
        type="text"
        name="name"
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
      />
      <label htmlFor="description">Dog Description</label>
      <textarea
        name="description"
        cols="80"
        rows="10"
        value={descriptionInput}
        onChange={(e) => setDescriptionInput(e.target.value)}
      ></textarea>
      <label htmlFor="picture">Select an Image</label>
      <select
        onChange={(e) => setImageInput(e.target.value)}
        style={{ cursor: "pointer" }}
      >
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
