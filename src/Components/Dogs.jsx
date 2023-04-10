import { DogCard } from "./DogCard";

export const Dogs = ({ dogs, setDogs }) => {
  const handleClick = (id) => {
    setDogs((prev) =>
      prev.map((dog) =>
        dog.id === id ? { ...dog, isFavorite: !dog.isFavorite } : dog
      )
    );
    const newFav = dogs.find((dog) => dog.id === id).isFavorite;
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify({
      isFavorite: !newFav,
    });
    const requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(`http://localhost:3000/dogs/${id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => console.log("isFavorite status successfully changed!"))
      .catch((error) => console.log("error = ", error));
  };

  const handleDelete = (id) => {
    setDogs((prev) => prev.filter((dog) => dog.id !== id));
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };
    fetch(`http://localhost:3000/dogs/${id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => alert("Dog successfully deleted!"))
      .catch((error) => console.log("error = ", error));
  };

  return (
    <>
      {dogs.map((dog) => (
        <DogCard
          dog={dog}
          key={dog.id}
          handleClick={handleClick}
          handleDelete={handleDelete}
        />
      ))}
    </>
  );
};
