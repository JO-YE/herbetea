import React, { useState } from "react";
import next from "../components/assets/product/nexticon.png";

const PageList = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageClick = (page) => {
    onPageChange(page);
  };

  // Generating the pages dynamically based on total pages
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);

  return (
    <div className="flex space-x-4 items-center justify-center pt-10 pb-48">
      {pages.map((page) => (
        <div
          key={page}
          className={`cursor-pointer rounded-full py-2 px-4 font-semibold font-Playfair Display ${currentPage === page ? 'bg-gray-500 text-white' : 'bg-neutral-100 text-gray-500'} opacity-100`}
          onClick={() => handlePageClick(page)}
        >
          {page}
        </div>
      ))}
      <button 
        className="w-[30px] h-[30px] relative"
        onClick={() => handlePageClick(currentPage < totalPages ? currentPage + 1 : currentPage)}
        disabled={currentPage >= totalPages}
      >
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
