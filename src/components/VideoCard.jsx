import React from "react";
import { Link } from "react-router-dom";
import { UilCheckCircle } from "@iconscout/react-unicons";
const demoThumbnailUrl = "https://i.ibb.co/G2L2Gwp/API-Course.png";
const demoChannelUrl = "/channel/UCmXmlB4-HJytD7wek0Uo97A";
const demoVideoUrl = "/video/GDa8kZLNhJ4";
const demoChannelTitle = "JavaScript Mastery";
const demoVideoTitle =
  "Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI";

export default function VideoCard({
  video: {
    id: { videoId },
    snippet,
  },
}) {
  return (
    <div className="w-full sm:w-80">
      <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
        <img
          src={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          height="180"
          className="w-full"
        />
      </Link>
      <div className="bg-zinc-900 h-24">
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <span className="text-white">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </span>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <span className="flex flex-row gap-1 align-center text-white">
            {snippet?.channelTitle || demoChannelTitle}
            <UilCheckCircle color="gray" size="12px" />
          </span>
        </Link>
      </div>
    </div>
  );
}
