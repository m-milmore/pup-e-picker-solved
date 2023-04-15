import { useState, useEffect } from "react";
import { Dogs } from "./Dogs";
import { CreateDogForm } from "./CreateDogForm";

export const SECTION_INIT = {
  favBtn: false,
  unfavBtn: false,
  createBtn: false,
};

export const Section = ({ dogs, setDogs, addDog, updateDog, deleteDog }) => {
  const [sectionBtns, setSectionBtns] = useState(SECTION_INIT);
  const [dogsToDisplay, setDogsToDisplay] = useState([]);
  const favDogsCount = dogs.filter((dog) => dog.isFavorite).length;
  const unfavDogsCount = dogs.length - favDogsCount;

  useEffect(() => {
    setDogsToDisplay([...dogs]);
  }, [dogs]);

  useEffect(() => {
    sectionBtns.favBtn
      ? setDogsToDisplay(dogs.filter((dog) => dog.isFavorite))
      : sectionBtns.unfavBtn
      ? setDogsToDisplay(dogs.filter((dog) => !dog.isFavorite))
      : setDogsToDisplay(dogs);
  }, [sectionBtns, dogs]);

  const handleSectionBtns = (btn) => {
    sectionBtns[btn]
      ? setSectionBtns(SECTION_INIT)
      : setSectionBtns({
          ...SECTION_INIT,
          [btn]: true,
        });
  };

  return (
    <section>
      <div className="container-header">
        <div className="container-label">Dogs</div>
        <div className="selectors">
          <div
            className={`selector ${sectionBtns.favBtn ? "active" : ""}`}
            onClick={() => handleSectionBtns("favBtn")}
          >
            favorited ( {favDogsCount} )
          </div>
          <div
            className={`selector ${sectionBtns.unfavBtn ? "active" : ""}`}
            onClick={() => handleSectionBtns("unfavBtn")}
          >
            unfavorited ( {unfavDogsCount} )
          </div>
          <div
            className={`selector ${sectionBtns.createBtn ? "active" : ""}`}
            onClick={() => handleSectionBtns("createBtn")}
          >
            create dog
          </div>
        </div>
      </div>
      {sectionBtns.createBtn ? (
        <CreateDogForm setSectionBtns={setSectionBtns} addDog={addDog} />
      ) : (
        <Dogs
          dogs={dogsToDisplay}
          updateDog={updateDog}
          deleteDog={deleteDog}
        />
      )}
    </section>
  );
};
