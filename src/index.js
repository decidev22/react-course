import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { FavoritesContextProvider } from "./store/favorites-context";

ReactDOM.render(
  <FavoritesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoritesContextProvider>,
  document.getElementById("root")
);

// import React from "react";
// import ReactDOM from "react-dom/client";

// import "./index.css";
// import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
