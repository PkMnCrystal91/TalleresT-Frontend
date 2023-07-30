import { dateFormater } from "../helpers/dateFormater";

export const MovieItem = ({ movie }) => {
  const cardStyle = {
    width: "18rem",
  };
  return (
    <div className="card" style={cardStyle}>
      <div className="card-body">
        <h5 className="card-title">{movie.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          Released Date: {movie.released_date}
        </h6>
        <h6 className="card-subtitle mb-2 text-muted">
          Budget: {movie.budget}
        </h6>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
};
