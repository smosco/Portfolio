import React from "react";
import {
  UilFire,
  UilMusicNote,
  UilClapperBoard,
  UilLightbulbAlt,
  UilFootball,
  UilRss,
  UilRobot,
} from "@iconscout/react-unicons";

export default function Sidebar({ selectedCategory, setSelectedCategory }) {
  const categories = [
    { name: "Trending", icon: <UilFire /> },
    { name: "Music", icon: <UilMusicNote /> },
    { name: "Movies", icon: <UilClapperBoard /> },
    { name: "Live", icon: <UilRss /> },
    { name: "Gaming", icon: <UilRobot /> },
    { name: "Sports", icon: <UilFootball /> },
    { name: "Learning", icon: <UilLightbulbAlt /> },
  ];
  return (
    <div>
      {categories.map((category) => (
        <button
          key={category.name}
          className="flex flex-row align-center cursor-pointer rounded-lg px-2 py-2 transition-all ease-out duration-300"
          onClick={(e) => setSelectedCategory(category.name)}
          style={{
            background: category.name === selectedCategory && "#fc1503",
            color: "#ffff",
          }}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.8",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </div>
  );
}
