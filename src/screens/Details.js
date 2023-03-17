/* eslint-disable */
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Details() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state?.data;
  return (
    <div className="details-wrap">
      <img alt="back button" src="https://img.icons8.com/ios-filled/100/9ACD32/circled-left-2.png" onClick={() => { navigate('/'); }} />
      <h1>{data.Country}</h1>
      <ul>
        <li className="list-details">
          Country Code:
          <span>
            {' '}
            {data.CountryCode}
          </span>
        </li>
        <li className="list-details">
          Slug:
          <span>
            {' '}
            {data.Country}
          </span>
          {' '}

        </li>
        <li className="list-details">
          New Confirmed:
          <span>
            {' '}
            {data.NewConfirmed}
          </span>
          {' '}

        </li>
        <li className="list-details">
          Total Confirmed:
          <span>
            {' '}
            {data.TotalConfirmed}
          </span>
          {' '}

        </li>
        <li className="list-details">
          New Deaths:
          <span>
            {' '}
            {data.NewDeaths}
          </span>
          {' '}

        </li>
        <li className="list-details">
          Total Deaths:
          <span>
            {' '}
            {data.TotalDeaths}
          </span>
          {' '}

        </li>
        <li className="list-details">
          New Recovered:
          <span>
            {' '}
            {data.NewRecovered}
          </span>
          {' '}

        </li>
        <li className="list-details">
          Total Recovered:
          <span>
            {' '}
            {data.TotalRecovered}
          </span>
          {' '}

        </li>
        <li className="list-details">
          Date:
          <span>
            {' '}
            {data.Date}
          </span>
          {' '}

        </li>
      </ul>
    </div>
  );
}

export default Details;
