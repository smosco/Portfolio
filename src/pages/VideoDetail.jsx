import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactPlayer from "react-player";
import fetchFromAPI from "../utils/fetchFromAPI";
import Videos from "../components/Videos";
import { UilCheckCircle } from "@iconscout/react-unicons";

export default function VideoDetail() {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState([]);
  const [videos, setVideos] = useState([]);
  //useEffect(() => {
  //  console.log("fetching...");
  //  fetchFromAPI(
  //    `videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}`
  //  ).then((data) => setVideoDetail(data.items[0]));

  //  fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
  //    (data) => setVideos(data.items)
  //  );
  //}, [id]);

  //if(!videoDetail?.snippet) return <Loader />;

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          <div style={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <span className="text-white p-2 font-bold">{title}</span>
            <div className="flex flex-row justify-between text-white px-2 py-1">
              <Link to={`/channel/${channelId}`}>
                <span className="text-white">
                  {channelTitle}
                  <UilCheckCircle size="12px" color="grey" />
                </span>
              </Link>
              <div className="flex flex-row g-4 align-center">
                <span className="opacity-70">
                  {parseInt(viewCount).toLocaleString()} views
                </span>
                <span className="opacity-70">
                  {parseInt(likeCount).toLocaleString()} likes
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center align-center px-2 py-4">
          <Videos videos={videos} direction="flex flex-col " />
        </div>
      </div>
    </div>
  );
}
