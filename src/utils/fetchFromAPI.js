import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: 25,
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export default async function fetchFromAPI(url) {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  console.log(data);
  return data;
  //return fetch(`${BASE_URL}/${url}`, options).then((res) => res.json());
}
