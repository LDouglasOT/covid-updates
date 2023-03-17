/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStats } from '../components/redux/feature/Covid';
import CountryData from '../components/CountryData';

function Home() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.CovidReducer.countries);
  const loading = useSelector((state) => state.CovidReducer.loading);
  const [searchTerm, setSearchTerm] = useState('');
  const getData = () => {
    if (countries.length > 0) {
      return;
    }
    dispatch(fetchStats());
  };
  useEffect(() => {
    getData();
  }, [0]);

  return (
    <div className="subcontainer">
      <div className="TopBar">
        <h1>COVIDSTATS</h1>
        <input className="searchBar" placeholder="Search Countries" type="text" onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
      <div className="subcontainer">
        {
      loading
        ? <div>Loading</div>
        : countries.filter((country) => {
          if (searchTerm === '') {
            return country;
          } if (country.Country.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
            return country;
          }
          return country;
        }).map((country) => (
          <CountryData key={country} country={country} />
        ))
      }
      </div>
    </div>
  );
}

export default Home;
