"use client";
import Header from "./Components/Header";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";
import { useState, useEffect } from "react";
export default function Home() {
  const [country, setcountry] = useState([]);
  useEffect(() => {
    const fetchcountries = async () => {
      try {
        const res = await axios.get("https://restcountries.com/v3.1/all");
        const data = res.data;
        setcountry(data);
        console.log(country);
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
      <div className="bodysection">
        {country.map((c) => {
          <div className="country"></div>;
        })}
      </div>
    </>
  );
}
