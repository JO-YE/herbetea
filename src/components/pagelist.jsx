import React, { useState } from "react";
import next from "../components/assets/product/nexticon.png";

const PageList = () => {
  const [selectedPage, setSelectedPage] = useState(1); // this default to page 1

  // this function to handle page click
  const handlePageClick = (page) => {
    setSelectedPage(page);
  };

  // working on the change in bg color and text as we click on it
  const pages = [
    {
      id: 1,
      name: "1",
      colorClass:
        selectedPage === 1
          ? "bg-gray-500 text-white"
          : "bg-neutral-100 text-gray-500",
    },
    {
      id: 2,
      name: "2",
      colorClass:
        selectedPage === 2
          ? "bg-gray-500 text-white"
          : "bg-neutral-100 text-gray-500",
    },
    {
      id: 3,
      name: "3",
      colorClass:
        selectedPage === 3
          ? "bg-gray-500 text-white"
          : "bg-neutral-100 text-gray-500",
    },
  ];

  return (
    <div className="flex space-x-4 items-center justify-center pt-10 pb-48">
      {pages.map((page) => (
        <div
          key={page.id}
          className={`cursor-pointer rounded-full py-2 px-4 font-semibold font-Playfair Display ${page.colorClass} opacity-100`}
          onClick={() => handlePageClick(page.id)}
        >
          {page.name}
        </div>
      ))}
      <button className="w-[30px] h-[30px] relative">
        <img
          src={next}
          alt=""
          className="w-[30px] h-[30px] left-0 top-0 absolute rounded-full border border-gray-500"
        />
      </button>
    </div>
  );
};

export default PageList;
