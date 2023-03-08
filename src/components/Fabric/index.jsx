import React from 'react';
import mushrooms from './../../images/mushrooms.jpg'

const Fabric = ({
  brand,
  // content,
    // fiberType
    // percentage
  cost,
  costPerYard,
  image,
  name,
  quantityInYards,
  stretchPercentage,
  weight,
  width,
}) => (
  <div className="fabric-card card">
    <img className="fabric-swatch" src={mushrooms} alt="mushrooms" />
    {/*<p>{image}</p>*/}

    <div>
      <p className="capitalize">
        {brand}
        <br />
        {name}
      </p>

      <p>
        {`${quantityInYards} yards @ ${width}" wide`}
        <br />
        {`${stretchPercentage}% stretch, ${weight}weight`}
      </p>

      <p>{`$${costPerYard}/yard ($${cost.toFixed(2)} total)`}</p>
    </div>
  </div>
);

export default Fabric;
