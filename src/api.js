import axios from "axios";

const searchImages = async () => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID P2GRUK1Ly-wwXqIUox6KDGCtrmPupw7XYtWvx1oW8tc",
    },
    params: {
      query: "cars",
    },
  });

  console.log(response);

  return response;
};

export default searchImages;
