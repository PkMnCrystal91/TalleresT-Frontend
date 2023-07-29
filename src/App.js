import "./App.css";
import MovieForm from "./components/MovieForm";
import { Sidebar } from "./components/Sidebar";
import { AppRouter } from "./router/AppRouter";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <AppRouter />
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
