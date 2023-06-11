"use client";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import AddressInfo from "./AddressInfo";

export default function Home() {
  const [ipAddress, setIpAddress] = useState("");
  const [showAddressInfo, setShowAddressInfo] = useState(false);
  const [realIpAddress, setRealIpAddress] = useState({});
  console.log(realIpAddress);

  const fetchData = async () => {
    const API_URL = `https://geo.ipify.org/api/v2/country?apiKey=at_i6HF4CCXejie5TBo0SxR73PYVtyO5&ipAddress=${ipAddress}`;

    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setRealIpAddress(data);
      setShowAddressInfo(true);
    } catch (error) {
      console.error("Error fetching address info:", error);
    }
  };

  const onClick = () => {
    const input = document.querySelector("input");
    const search = input.value;
    setIpAddress(search);
    fetchData();
  };

  return (
    <React.Fragment>
      <div className="bg-hero-pattern bg-cover bg-center h-[100vh] flex items-center flex-col pt-[30px] ">
        <h1 className="text-white text-4xl font-bold font-body">
          IP Address Tracker
        </h1>
        <SearchBar onClick={onClick} />
        {showAddressInfo && <AddressInfo realIpAddress={realIpAddress} />}
      </div>
    </React.Fragment>
  );
}
