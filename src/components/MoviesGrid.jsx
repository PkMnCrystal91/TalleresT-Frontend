import { useState, useEffect } from "react";
import { MovieItem } from "./MovieItem";
import { getMovies, getMovieByDate } from "../api/Api";
import { Navbar } from "./Navbar";

export const MoviesGrid = () => {
  const [movieData, setMovieData] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const searchByDate = (newdate) => {
    setSelectedDate(newdate);
  };

  useEffect(() => {
    getMovies(currentPage).then((resp) => {
      console.log(resp.data);
      setMovieData(resp.data);
      setTotalPages(resp.totalPages);
    });
  }, [currentPage]);

  console.log(selectedDate);

  return (
    <>
      <Navbar searchByDate={(event) => searchByDate(event)} />
      <div className="container-fluid mt-3">
        <div className="wrapper d-flex flex-wrap justify-content-center gap-4">
          {movieData
            .filter((data) => {
              return selectedDate.toLowerCase() === ""
                ? data
                : data.released_date.includes(selectedDate);
            })
            .map((data) => {
              return <MovieItem movie={data} key={data.id} />;
            })}
        </div>

        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center mt-4">
            <li className="page-item">
              <button
                className="page-link"
                onClick={handlePrevPage}
                disabled={currentPage === 1}
              >
                Previous
              </button>
            </li>
            <li className="page-item">
              <span className="page-link">
                Page {currentPage} of {totalPages}
              </span>
            </li>

            <li className="page-item">
              <button
                className="page-link"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
