import React from 'react';
import { Link } from 'react-router-dom';


const Directory = () => {
  return (
    <div>
      <div className="container row directory">
        <Link to='/6mo'>
          <button
            className="btn btn-secondary"
            >
            Get 6 Months Data
          </button>
        </Link>
        <Link to='/1yr'>
          <button
            className="btn btn-secondary"
            >
            Get 1 Year Data
          </button>
        </Link>
        <Link to='/5yr'>
          <button
            className="btn btn-secondary"
            >
            Get 5 Year Data
          </button>
        </Link>
        <Link to='/'>
          <button
            className="btn btn-secondary"
            >
            Get Max Data
          </button>
        </Link>
      </div>
      <div className="container">
        <h4>The search bar by default will return Max Data, please select a time frame of House Price Indexes:</h4>
      </div>
    </div>
  )
}

export default Directory;