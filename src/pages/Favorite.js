import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
  const favorite_Context = useContext(FavoritesContext);

  // helper for fallback on empty screen
  // this currently only stores in a temporary memory...!
  let content;
  if (favorite_Context.totalFavorites === 0) {
    content = (
      <p>
        You currently have no favorites yet. Add some and manage your
        favorite meetups here!
      </p>
    );
  } else {
    content = <MeetupList meetups={favorite_Context.favorites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
