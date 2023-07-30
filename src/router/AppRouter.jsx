import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import MovieForm from "../components/MovieForm";
import { Sidebar } from "../components/Sidebar";
import { RentaPeliculas } from "../pages/RentaPeliculas";

export const AppRouter = () => {
  const usuario = "administrador";

  return (
    <>
      <Sidebar>
        <Routes>
          {usuario === "administrador" ? (
            <>
              <Route path="/" element={<HomePage />} />
              <Route path="/*" element={<Navigate to="/" />} />
              <Route path="/form" element={<MovieForm />} />
            </>
          ) : (
            <>
              <Route
                path="/renta"
                element={<RentaPeliculas usuario={usuario} />}
              />
              <Route path="/*" element={<Navigate to="/" />} />
            </>
          )}
        </Routes>
      </Sidebar>
    </>
  );
};
