import React, { useState } from "react";

export default function ImageSearch({ searchText }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        <div className="flex item-center border-b border-b-2 border-purple-500 py-2">
          <input
            type="text"
            placeholder="Search nature image"
            className="appearane-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 leading-tight focus:outline"
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className="flex-shrink-0 bg-purple-500 hover:bg-purple-700 border-purple-500 hover:border-purple-700 text-sm border-4 text-white py-1 px-2"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
