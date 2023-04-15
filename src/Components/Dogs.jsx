import { DogCard } from "./DogCard";

export const Dogs = ({ dogs, setDogs, updateDog, deleteDog }) => {
  return (
    <>
      {dogs.map((dog) => (
        <DogCard
          key={dog.id}
          dog={dog}
          updateDog={updateDog}
          deleteDog={deleteDog}
        />
      ))}
    </>
  );
};
