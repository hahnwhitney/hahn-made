import React, { useState } from 'react';
import { fabricContentArray } from './arrays';

const FabricForm = () => {
  const [fabricDetails, setFabricDetails] = useState({
    brand: '',
    content: [{
      fiberType: '',
      percentage: '',
    }],
    cost: '',
    costPerYard: '',
    image: '',
    name: '',
    quantityInYards: 0,
    stretchPercentage: 0,
    weight: '',
    width: '',
  });

  const handleChange = e => {
      const { name, value } = e.target;
      setFabricDetails(prevState => ({
        ...prevState,
        [name]: value
      }));
  };

  const handleContentObjectChange = (e, index) => {
    const { name, value } = e.target;

    setFabricDetails(prevState => ({
      ...prevState,
      content: [
        {
          [name]: value,
          percentage: 100,
        },
      ],
    }));
  }

  const handleSubmit = (event) => {
    console.log(fabricDetails);
    event.preventDefault();
  }

  return (
    <div className="fabric-form-wrapper">
      <h3>Add a New Fabric</h3>

      <form className="fabric-form" onSubmit={handleSubmit}>
          <div className="flex-wrapper">
            <label id="brand-label" htmlFor="brand">Brand</label>
            <input
              id="brand"
              name="brand"
              type="text"
              value={fabricDetails.brand}
              onChange={handleChange}
            />
          </div>

          <div className="flex-wrapper">
            <label htmlFor="fabric-name">Name</label>
            <input
              id="fabric-name"
              name="name"
              type="text"
              value={fabricDetails.name}
              onChange={handleChange}
            />
          </div>

          <div className="flex-wrapper">
            <label htmlFor="fabric-cost">Cost</label>
            <input
              id="fabric-cost"
              name="cost"
              type="text"
              value={fabricDetails.cost}
              onChange={handleChange}
            />
          </div>

          <div className="flex-wrapper">
            <label htmlFor="fabric-cost-per-yard">Cost per Yard</label>
            <input
              id="fabric-cost-per-yard"
              name="costPerYard"
              type="text"
              value={fabricDetails.costPerYard}
              onChange={handleChange}
            />
          </div>

          {/* image */}

          <div className="flex-wrapper">
            <label htmlFor="quantity-yards">Length in Yards</label>
            <input
              id="quantity-yards"
              name="quantityInYards"
              type="text"
              value={fabricDetails.quantityInYards}
              onChange={handleChange}
            />
          </div>

          <div className="flex-wrapper">
            <label htmlFor="width">Width in Inches</label>
            <input
              id="width"
              name="width"
              type="text"
              value={fabricDetails.width}
              onChange={handleChange}
            />
          </div>

          <div className="flex-wrapper">
            <label htmlFor="stretch-percentage">Percentage Stretch</label>
            <input
              id="stretch-percentage"
              name="stretchPercentage"
              type="text"
              value={fabricDetails.stretchPercentage}
              onChange={handleChange}
            />
          </div>

          <fieldset id="cone-content-wrapper">
            <legend>Weight</legend>
            <label htmlFor="weight-light">
              <input
                id="weight-light"
                name="weight"
                type="radio"
                value="light"
                onChange={handleChange}
              />
              Light
            </label>
            <label htmlFor="weight-mid">
              <input
                id="weight-mid"
                name="weight"
                type="radio"
                value="mid"
                onChange={handleChange}
              />
              Mid
            </label>
            <label htmlFor="weight-heavy">
              <input
                id="weight-heavy"
                name="weight"
                type="radio"
                value="heavy"
                onChange={handleChange}
              />
              Heavy
            </label>
          </fieldset>

          <fieldset className="wow" id="fiber-content-wrapper">
            <legend>Fiber Content</legend>
            <div>
            {fabricContentArray.map((item, i) => {
              return (
                <label htmlFor={`fiber-${item}`} key={item.replace(/[^A-Za-z0-9]/g, '-').toLowerCase()}>
                  <input
                    id={`fiber-${item}`}
                    name="fiberType"
                    type="radio"
                    value={item}
                    onChange={handleContentObjectChange}
                  />
                  {item}
                </label>
              )
            })}
            </div>
          </fieldset>

          <input className="form-submit" type="submit" value="Add Fabric" />
      </form>
    </div>
  );
};

export default FabricForm;
