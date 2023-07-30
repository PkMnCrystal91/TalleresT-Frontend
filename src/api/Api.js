import axios from "axios";
const API_ENDPOINT_MOVIES = "http://localhost:3010/api/movies";
const API_ENDPOINT_OPTIONS = "http://localhost:3010/api/options";

export const handleSubmit = async (formData) => {
  try {
    const parsedFormData = {
      ...formData,
      duration: parseInt(formData.duration),
      budget: parseInt(formData.budget),
    };

    const response = await fetch(API_ENDPOINT_MOVIES, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(parsedFormData),
    });
    const data = await response.json();
    console.log("Data sent successfully:", data);
    return data;
  } catch (error) {
    console.error("Error sending data:", error);
    throw error;
  }
};

export const getMovies = (page) => {
  const url = API_ENDPOINT_MOVIES;
  return axios
    .get(url + `?page=${page}&limit=6`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export const getMovieByDate = (date) => {
  const url = API_ENDPOINT_MOVIES;

  return axios
    .get(url + `?date=${date}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

//  ENDPOINTS PARA OPCIONES

export const getOptions = () => {
  const url = API_ENDPOINT_OPTIONS;

  return axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};
