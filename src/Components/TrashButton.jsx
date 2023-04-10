import { Icons } from "../assets/icons";

export const TrashButton = ({ onClick }) => (
  <img
    src={Icons.Trash}
    alt=""
    className="trash-button"
    style={{
      width: 40,
      border: 0,
      opacity: 1,
      cursor: "pointer",
    }}
    onClick={() => {
      onClick();
    }}
  />
);
