import React from "react";

export const RentaPeliculas = () => {
  const peliculasRentads = [
    {
      name: "Beauty and the Beast",
      budget: 160,
      released_date: "2017-03-17",
      duration: 129,
    },
    {
      name: "Harry Potter and the Deathly Hallows: Part 2",
      budget: 250,
      released_date: "2011-07-15",
      duration: 130,
    },
    {
      name: "Star Wars: The Force Awakens",
      budget: 245,
      released_date: "2015-12-18",
      duration: 138,
    },
  ];
  return (
    <div className="d-flex align-items-center flex-column m-2">
      <h2 className="mt-3">Renta de Peliculas</h2>
      <br />
      {peliculasRentads.map((item, index) => (
        <ul to={item.path} key={index}>
          <li>{item.name}</li>
        </ul>
      ))}
    </div>
  );
};
