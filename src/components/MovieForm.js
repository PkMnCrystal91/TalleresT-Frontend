import { useForm } from "../hooks/useForm";
import { handleSubmit } from "../api/Api";
import { toastService } from "../helpers/toastService";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../styles/Form.css";

const movieInfo = {
  name: "",
  duration: "",
  budget: "",
  released_date: "",
};

const MovieForm = () => {
  const { name, duration, budget, released_date, onInputChange, onResetForm } =
    useForm(movieInfo);

  const movieSubmit = (event) => {
    event.preventDefault();
    handleSubmit({ name, budget, released_date, duration });
    onResetForm();
    toastService("La película fue guardada correctamente");
  };

  return (
    <div
      id="container"
      className="container-fluid d-flex justify-content-center align-items-center"
    >
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <form
        onSubmit={movieSubmit}
        className="row needs-validation p-4 "
        id="miFormulario"
      >
        <div className="col-11 mx-auto mb-4 row d-flex justify-content-center mt-4">
          <div className="label-box col-12 col-md-2 text-end">
            <label className="mt-1 fs-5">Name:</label>
          </div>
          <div className="col-12 col-md-8">
            <input
              type="text"
              name="name"
              value={name}
              onChange={onInputChange}
              placeholder="Please enter a code"
              className="form-control"
              required
            />
            <div className="valid-feedback">Approved!</div>
            <div className="invalid-feedback">Please enter the field</div>
          </div>
        </div>

        <div className="col-11 mx-auto mb-4 row d-flex justify-content-center">
          <div className="label-box col-12 col-md-2 text-end">
            <label className="mt-1 fs-5">Duration:</label>
          </div>
          <div className="col-12 col-md-8">
            <input
              type="number"
              name="duration"
              value={duration}
              onChange={onInputChange}
              placeholder="Please enter a description"
              className="form-control"
              id="validationCustom01"
              required
            />
            <div className="valid-feedback">Approved!</div>
            <div className="invalid-feedback">Please enter the field</div>
          </div>
        </div>

        <div className="col-11 mx-auto mb-4 row d-flex justify-content-center">
          <div className="label-box col-12 col-md-2 text-end">
            <label className="mt-1 fs-5">Budget:</label>
          </div>
          <div className="col-12 col-md-8">
            <input
              type="number"
              name="budget"
              value={budget}
              onChange={onInputChange}
              placeholder="Please enter a description"
              className="form-control"
              id="validationCustom01"
              required
            />
            <div className="valid-feedback">Approved!</div>
            <div className="invalid-feedback">Please enter the field</div>
          </div>
        </div>

        <div className="col-11 mx-auto mb-4 row d-flex justify-content-center">
          <div className="label-box col-12 col-md-2 text-end">
            <label className="mt-1 fs-5">Date:</label>
          </div>
          <div className="col-12 col-md-8">
            <input
              type="date"
              name="released_date"
              value={released_date}
              onChange={onInputChange}
              placeholder="Please enter a description"
              className="form-control"
              id="validationCustom01"
              required
            />
            <div className="valid-feedback">Approved!</div>
            <div className="invalid-feedback">Please enter the field</div>
          </div>
        </div>

        <div className="col-12 col-md-11 mx-auto row mx-auto d-flex justify-content-between my-2">
          <button className="btn btn-primary col-12 col-md-2" type="submit">
            Submit
          </button>
          <button
            onClick={onResetForm}
            className="btn btn-danger col-12 col-md-2"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default MovieForm;
