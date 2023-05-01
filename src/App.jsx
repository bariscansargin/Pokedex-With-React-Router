import React from "react";
import "./App.css";
import PokePage, { loader as pokeLoader } from "./pages/PokePage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PokeFeaturesPage, {
  loader as pokeFeaturesLoader,
} from "./pages/PokeFeaturesPage";

const router = createBrowserRouter([
  { path: "/", element: <PokePage/>, loader: pokeLoader },
  {
    path: "/:pokemonName",
    element: <PokeFeaturesPage />,
    loader: pokeFeaturesLoader,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
