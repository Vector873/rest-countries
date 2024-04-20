"use client";
import Header from "./Components/Header";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";
import { useState, useEffect } from "react";
export default function Home() {
  const [Data, setData] = useState([]);
  useEffect(() => {
    const fetchcountries = async () => {
      try {
        const res = await axios.get("/public/data.json");
        const data = res.data;
        setData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchcountries();
  }, []);
  return (
    <>
      <Header />
      <div className="search">
        <div className="searchbar">
          <AiOutlineSearch />
          <input type="text" placeholder="Search for a country..."></input>
        </div>
        <select className="select" defaultValue="Region">
          <option value="Region" disabled>
            Filter by Region
          </option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </>
  );
}
