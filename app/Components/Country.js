import styles from "../Components/Country.module.css";
import data from "../../public/data.json";
import { useState, useEffect } from "react";
import Image from "next/image";
const Country = () => {
  const [country, setcountry] = useState([]);
  useEffect(() => {
    const updatedata = data.map((d, i) => {
      return {
        ...d,
        id: i + 1,
      };
    });
    setcountry(updatedata);
  }, []);
  return (
    <>
      <div className={styles.bodysection}>
        {country.map((c) => (
          <div key={c.id} className={styles.country}>
            <Image
              src={c.flags.svg}
              alt={`${c.name} flag`}
              width={224}
              height={150}
            />
            <div className={styles.countryinfo}>
              <h4>{c.name}</h4>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <span>Population: </span> <p>{c.population}</p>{" "}
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <span>Region: </span> <p>{c.region}</p>{" "}
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <span>Capital: </span> <p>{c.capital}</p>{" "}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Country;
