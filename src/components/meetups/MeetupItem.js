import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";

import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";

const MeetupItem = (props) => {
  const favoriteContext = useContext(FavoritesContext);

  const itemIsFavorite = favoriteContext.itemIsFavorite(props.id);

  const toggleFavoriteStatusHandler = () => {
    if (itemIsFavorite) {
      favoriteContext.removeFavorite(props.id);
    } else {
      favoriteContext.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite
              ? "Remove From Favorites"
              : " Add To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
