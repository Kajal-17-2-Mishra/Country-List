import { Link } from "react-router-dom";

export default function CountryCard({
  flag,
  population,
  region,
  capital,
  name,
  data,
}) {
  return (
    <Link to={`/${name}`} className="country-card" state={data}>
      <div className="flag-container">
        <img src={flag} alt={name + " Flag"} />
      </div>
      <div className="card-text">
        <h3 className="card-title">{name}</h3>
        <p>
          <b>Population: </b> {population}
        </p>
        <p>
          <b>Region: </b> {region}
        </p>
        {capital && (
          <p>
            <b>Capital: </b> {capital}
          </p>
        )}
      </div>
    </Link>
  );
}
