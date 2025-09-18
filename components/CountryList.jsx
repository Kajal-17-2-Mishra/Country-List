import { useEffect, useState } from "react";

import CountryCard from "./CountryCard.jsx";
import CountryListShimmer from "./CountriesListShimmer.jsx";

export default function CountryList({ query }) {
  const [allCountryData, setAllCountryData] = useState([]);
  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,population,region,flags,capital,subregion,tld,languages,currencies,borders"
    )
      .then((response) => response.json())
      .then((data) => {
        setAllCountryData(data);
      });
  }, []);

  if (allCountryData.length === 0) {
    return <CountryListShimmer />;
  }

  const filteredCountries = allCountryData.filter((country) => {
    return country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query)
  });


  return (
    <div className="countries-container">
      {filteredCountries.map((countryData) => {
        return (
          <CountryCard
            key={countryData.name.common}
            flag={countryData.flags.svg}
            name={countryData.name.common}
            population={countryData.population.toLocaleString("en-IN")}
            region={countryData.region}
            capital={countryData.capital?.[0]}
            data={countryData}
          ></CountryCard>
        );
      })}
    </div>
  );
}
