import React, { useState } from "react";

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");

  const onChange = (text) => {
    searchText(text);
    setText(text);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    //console.log("Okay");
    searchText(text);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
          <input
            onChange={(e) => onChange(e.target.value)}
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search Image Term..."
          />
          <button
            className="flex-shrink-0 bg-teal-500 text-sm border-4 text-gray py-1 px-2 rounded hover:bg-teal-700 border-teal-500 hover:border-teal-700 "
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
