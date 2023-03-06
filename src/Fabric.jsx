import React from 'react';

import navy from './fabric-images/navy-canvas.jpg'

const Fabric = ({
  brand,
  name,
}) => (
  <div className="card">
    <img className="fabric-swatch" src={navy} alt="navy" />

    <div className="capitalize">
      {brand}
      <br />
      {name}
    </div>
  </div>
);

export default Fabric;
