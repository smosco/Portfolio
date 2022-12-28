import React from "react";
import { Link } from "react-router-dom";
import { UilCheckCircle } from "@iconscout/react-unicons";
export const demoProfilePicture =
  "http://dergipark.org.tr/assets/app/images/buddy_sample.png";

export default function ChannelCard({ channelDetail }) {
  return (
    <div>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <img
          src={
            channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture
          }
          alt={channelDetail?.snippet?.title}
          className="rounded-full h-44 w-44 mb-2 border-1 border-zinc-200 "
        />
        <span>
          {channelDetail?.snippet?.title}
          <UilCheckCircle size="14px" color="grey" />
        </span>
        {channelDetail?.statistics?.subscriberCount && (
          <span className="text-base font-medium text-gray-500">
            {parseInt(
              channelDetail?.statistics?.subscriberCount
            ).toLocaleString("en-US")}
            Subscribers
          </span>
        )}
      </Link>
    </div>
  );
}
