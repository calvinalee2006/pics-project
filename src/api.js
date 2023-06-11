import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID P2GRUK1Ly-wwXqIUox6KDGCtrmPupw7XYtWvx1oW8tc",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
