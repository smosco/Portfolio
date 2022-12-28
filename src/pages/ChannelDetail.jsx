import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChannelCard from "../components/ChannelCard";
import fetchFromAPI from "../utils/fetchFromAPI";
import Videos from "../components/Videos";

export default function ChannelDetail() {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);
      setChannelDetail(data?.items[0]);
      const videosData = await fetchFromAPI(
        `search?channelId=${id}&part=snippet%2Cid&order=date`
      );
      setVideos(videosData?.items);
    };
    fetchResults();
  }, [id]);
  return (
    <div>
      <ChannelCard channelDetail={channelDetail} direction="flex" />
      <Videos videos={videos} />
    </div>
  );
}
