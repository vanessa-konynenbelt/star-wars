import React, { useState, useEffect } from 'react';
import { getDetails } from '../../services/sw-api';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';


const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  let location = useLocation()

  useEffect(() => {
    getDetails(location.state.starship.url)
    .then(starshipData => setStarshipDetails(starshipData))
  })

  return ( 
    <>
      <h3>Starship Page</h3>
      <h4>Name: {starshipDetails.name}</h4>
      <h4>Model: {starshipDetails.model}</h4>
      <Link  to="/">Return</Link><br/>
    </>
  );
}
 
export default StarshipDetails;