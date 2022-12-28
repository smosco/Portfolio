import React from "react";
import VideoCard from "./VideoCard";

export default function Videos({ videos, direction }) {
  return (
    <ul className={direction}>
      {videos.map((video, idx) => (
        <li key={idx}>{video.id.videoId && <VideoCard video={video} />}</li>
      ))}
    </ul>
  );
}
