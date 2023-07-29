import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import MovieForm from "../components/MovieForm";
import { Navbar } from "../components/Navbar";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<MovieForm />} />
      </Routes>
    </>
  );
};
