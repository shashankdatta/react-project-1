import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";

function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        key: props.id,
        _id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title}></img>
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button
            style={{ marginRight: "5px" }}
            onClick={toggleFavoriteStatusHandler}
          >
            {itemIsFavorite ? "Remove from Favorites" : "To Favorites"}
          </button>
          <button
            style={{
              backgroundColor: "red",
              color: "white",
              padding: "0.5rem 0.5rem",
            }}
          >
            Delete
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
