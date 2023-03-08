import React from 'react';
import mushrooms from './../../images/mushrooms.jpg'

const Fabric = ({
  brand,
  name,
}) => (
  <div className="card">
    <img className="fabric-swatch" src={mushrooms} alt="mushrooms" />

    <div className="capitalize">
      {brand}
      <br />
      {name}
    </div>
  </div>
);

export default Fabric;
