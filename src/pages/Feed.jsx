import React from "react";
//import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import fetchFromAPI from "../utils/fetchFromAPI";
import Sidebar from "../components/Sidebar";
import Videos from "../components/Videos";

export default function Feed() {
  const [selectedCategory, setSelectedCategory] = useState("Music");
  const [videos, setVideos] = useState([]);

  //useEffect(() => {
  //  setVideos([]);
  //  fetchFromAPI(`search?part=snippet&q=${selectedCategory}`) //
  //    .then((data) => {
  //      setVideos(data.items);
  //      console.log(data.items);
  //    });
  //}, [selectedCategory]);
  useEffect(() => {
    setVideos([]);
    fetch(`data/${selectedCategory}.json`)
      .then((res) => res.json())
      .then((data) => {
        setVideos(data.items);
        console.log(data);
      });
  }, [selectedCategory]);

  // const {
  //   isLoading,
  //   error,
  //   data: trend,
  // } = useQuery(["videos", selectedCategory], async () => {
  //   console.log("fetching...");
  //   return fetch(`data/${selectedCategory}.json`) //
  //     .then((res) => res.json());
  // });  useqeury쓸떄 어떻게 받아온 데이터를 sidebar로 넘기지?
  return (
    <div className="flex flex-row g-4 align-start p-4">
      <Sidebar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div>
        <Videos
          videos={videos}
          direction="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
        />
      </div>
    </div>
  );
}
