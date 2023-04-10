import { useState, useEffect } from "react";
import { Section } from "./Components/Section";
import "./App.css";
import "./fonts/RubikBubbles-Regular.ttf";

function App() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://localhost:3000/dogs")
        .then((response) => response.json())
        .then((parsed) => setDogs([...parsed]))
        .catch((error) => console.log("error ", error));
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <header>
        <h1>pup-e-picker</h1>
      </header>
      <Section label={"Dogs: "} dogs={dogs} setDogs={setDogs}/>
    </div>
  );
}

export default App;
