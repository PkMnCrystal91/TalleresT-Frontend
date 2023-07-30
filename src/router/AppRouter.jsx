import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import MovieForm from "../components/MovieForm";
import { Sidebar } from "../components/Sidebar";
import { RentaPeliculas } from "../pages/RentaPeliculas";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

export const AppRouter = () => {
  const { user } = useContext(UserContext);

  return (
    <Sidebar>
      <Routes>
        {user.rol === "administrad" ? (
          <>
            <Route path="/" element={<HomePage />} />
            <Route path="/form" element={<MovieForm />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            <Route path="/" element={<HomePage />} />
            <Route path="/form" element={<MovieForm />} />
            <Route path="/renta" element={<RentaPeliculas />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </Sidebar>
  );
};
