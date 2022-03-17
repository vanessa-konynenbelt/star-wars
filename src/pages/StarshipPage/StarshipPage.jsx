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
     <h2>{starshipDetails.name}</h2>
      <div className = "details">
        <h4>Name: {starshipDetails.name}</h4>
        <h4>Model: {starshipDetails.model}</h4>
        <h4>Length: {starshipDetails.length} m</h4>
        <h4>Crew: {starshipDetails.crew}</h4>
      </div>
      <div className = "return">
        <Link className="return-link" to="/">Return</Link><br/>
      </div>
    </>
  );
}
 
export default StarshipDetails;