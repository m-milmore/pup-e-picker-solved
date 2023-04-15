import { FavoriteButton } from "./FavoriteButton";
import { UnfavoriteButton } from "./UnfavoriteButton";
import { TrashButton } from "./TrashButton";

export const DogCard = ({
  dog: { name, image, description, id, isFavorite },
  updateDog,
  deleteDog,
}) => {
  const handleClick = () => {
    updateDog(id, { isFavorite: !isFavorite });
  };

  return (
    <div className="dog-card">
      {isFavorite ? (
        <UnfavoriteButton onClick={handleClick} />
      ) : (
        <FavoriteButton onClick={handleClick} />
      )}
      <TrashButton onClick={() => deleteDog(id)} />
      <p className="dog-name">{name}</p>
      <img src={image} alt={name} />
      <p className="dog-description">{description}</p>
    </div>
  );
};
