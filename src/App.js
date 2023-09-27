import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetUps";
import NewMeetupPage from "./pages/NewMeetUps";
import FavoritesPage from "./pages/Favorite";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact={true}>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>
        <Route path="/favorite">
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
