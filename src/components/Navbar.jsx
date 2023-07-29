import { Link, NavLink } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-ligth bg-ligth p-2 mt-2">
      <div
        id="form-container"
        className="container-fluid d-flex justify-content-end"
      >
        <div className="d-flex justify-content-end">
          <form className="d-flex justify-content-end">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
