import { useEffect, useState } from 'react'
import { getStarships } from '../../services/sw-api'
import { Link } from 'react-router-dom'

const Starships = (props) => {
  const [starships, setStarships] = useState([])

  useEffect(()=> {
    getStarships()
    .then(starshipData => setStarships(starshipData.results))
  })

  return (
    <>
      {starships.length ? 
      <>
        <div className='icon-container'>
          {starships.map((starship) => (
              <Link 
                key={starship.name}
                className='App-link'
                to="/starship-page"
                state={{ starship }}
              >
              <div id="classDiv" >
                {starship.name}
              </div>
            </Link>
          ))}
        </div>
      </>
      :
      <>
        <h2>Loading starships...</h2>
      </>}
    </>
  );
}
 
export default Starships;