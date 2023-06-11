"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";

const SearchBar = ({ onClick }) => {
  return (
    <React.Fragment>
      <div className="flex justify-center items-center w-[90%] sm:w-[100%] md:w-[70%] mt-[30px]">
        <input
          type="text"
          placeholder="Search..."
          className="bg-white rounded-tl-xl rounded-bl-xl px-6 py-3 w-[80%] outline-none input"
        />
        <button
          className="bg-black text-white rounded-tr-xl rounded-br-xl px-6 py-3"
          onClick={onClick}
        >
          <Image src="/images/icon-arrow.svg" width={20} height={20} />
        </button>
      </div>
    </React.Fragment>
  );
};

export default SearchBar;
