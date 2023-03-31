import React from 'react';
import PropTypes, { func } from 'prop-types';
import { Link } from 'react-router-dom';

function CountryData({ country }) {
  return (
    <Link className="analytic-container" state={{ data: country }} to="/Details">
      <h1>{country.Country}</h1>
      <div className="stats">
        <span className="flexer">
          <h2>{country.TotalConfirmed}</h2>
          <h2 className="caps">confirmed</h2>
        </span>
        <span className="flexer">
          <h2>{country.TotalDeaths}</h2>
          <h2 className="caps">deaths</h2>
        </span>
      </div>
    </Link>

  );
}
CountryData.propTypes = {
  country: PropTypes.func,
};
CountryData.defaultProps = {
  country: func,
};
export default CountryData;
