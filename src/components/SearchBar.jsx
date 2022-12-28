import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UilSearch } from "@iconscout/react-unicons";

export default function SearchBar() {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    text && navigate(`/search/${text}`);
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-row gap-2">
      <input
        type="text"
        placeholder="serach"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border-none outline-none w-40 sm:w-80 pl-2"
      />
      <button>
        <UilSearch color="red" />
      </button>
    </form>
  );
}
