import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Videos from "../components/Videos";
import fetchFromAPI from "../utils/fetchFromAPI";

export default function SearchFeed() {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();
  //useEffect(() => {
  //  fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
  //    setVideos(data.items)
  //  );
  //}, [searchTerm]);

  //useEffect(() => {
  //  const options = {
  //    method: "GET",
  //    headers: {
  //      "X-RapidAPI-Key": "d59182eca4mshfe3443b842b66edp131f80jsn7bc5ab1894f5",
  //      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  //    },
  //  };
  //  fetch(
  //    `https://youtube-v31.p.rapidapi.com/search?q=${searchTerm}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`,
  //    options
  //  )
  //    .then((response) => response.json())
  //    .then((response) => setVideos(response.items));
  //}, []);
  return (
    <div>
      <div className="font-bold text-white mb-4 ml-24">
        Search Results for
        <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </div>
      <Videos
        videos={videos}
        direction="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
      />
    </div>
  );
}
