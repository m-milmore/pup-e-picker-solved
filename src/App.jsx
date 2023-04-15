import { useState, useEffect } from "react";
import {
  getAllDogsFetch,
  createDogFetch,
  updateDogFetch,
  deleteDogFetch,
} from "./fetch-calls";
import { Section } from "./Components/Section";
import "./App.css";
import "./fonts/RubikBubbles-Regular.ttf";

function App() {
  const [dogs, setDogs] = useState([]);

  const fetchData = () => {
    getAllDogsFetch()
      .then((parsed) => setDogs([...parsed].reverse()))
      .catch((error) => console.log("error ", error));
  };

  const addDog = (dog) => {
    createDogFetch(dog)
      .then((newDog) => setDogs([...dogs, newDog]))
      .catch((error) => console.log("error = ", error));
  };

  const updateDog = (id, prop2Update) => {
    updateDogFetch(id, prop2Update)
      .then(
        setDogs(
          dogs.map((dog) => (dog.id === id ? { ...dog, prop2Update } : dog))
        )
      )
      .catch((error) => console.log("error = ", error));
  };

  const deleteDog = (id) => {
    deleteDogFetch(id)
      .then(setDogs(dogs.filter((dog) => dog.id !== id)))
      .catch((error) => console.log("error = ", error));
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="App">
      <header>
        <h1>pup-e-picker</h1>
      </header>
      <Section
        dogs={dogs}
        setDogs={setDogs}
        addDog={addDog}
        updateDog={updateDog}
        deleteDog={deleteDog}
      />
    </div>
  );
}

export default App;
