import { useForm } from "../hooks/useForm";
const movieInfo = {
  released_date: "",
};
export const Navbar = ({ searchByDate }) => {
  const { released_date, onInputChange } = useForm(movieInfo);

  const onFormSubmit = (event) => {
    event.preventDefault();

    searchByDate(released_date);
  };
  return (
    <nav className="navbar navbar-expand-sm navbar-ligth bg-ligth p-2 mt-2">
      <div
        id="form-container"
        className="container-fluid d-flex justify-content-end"
      >
        <div className="d-flex justify-content-end">
          <form className="d-flex justify-content-end" onSubmit={onFormSubmit}>
            <input
              className="form-control me-2"
              type="text"
              placeholder="YYYY-MM-DD"
              aria-label="Search"
              name="released_date"
              value={released_date}
              onChange={onInputChange}
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
