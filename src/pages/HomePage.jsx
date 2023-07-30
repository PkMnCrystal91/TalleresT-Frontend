import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { MoviesGrid } from "../components/MoviesGrid";

export const HomePage = () => {
  return (
    <div>
      <MoviesGrid />
    </div>
  );
};
