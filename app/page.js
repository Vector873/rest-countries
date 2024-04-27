"use client";
import Header from "./Components/Header";
import Country from "./Components/Country";
import { AiOutlineSearch } from "react-icons/ai";
export default function Home() {
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
      <Country />
    </>
  );
}
