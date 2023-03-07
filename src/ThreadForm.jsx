import React, { useState } from 'react';

const ThreadForm = () => {
  const [threadDetails, setThreadDetails] = useState({
    brand: '',
    color: '',
    colorId: '',
    colorHex: '',
    contentFiberType: '',
    contentPercentage: 100,
    cost: 0.00,
    quantityInYards: 0,
    type: '',
    isCone: false,
  });

  const handleChange = e => {
      const { name, value } = e.target;
      setThreadDetails(prevState => ({
        ...prevState,
        [name]: value
      }));
  };

  const handleSubmit = (event) => {
    console.log(threadDetails);
    event.preventDefault();
  }

  return (
    <div className="thread-form-wrapper">
      <h3>Add a New Thread</h3>

      <form  className="thread-form"onSubmit={handleSubmit}>
        <div>
          <div className="flex-wrapper">
            <label id="brand-label" htmlFor="brand">Brand</label>
            <input
              id="brand"
              name="brand"
              type="text"
              value={threadDetails.brand}
              onChange={handleChange}
            />
          </div>

          <div className="flex-wrapper">
            <label id="type-label" htmlFor="type">Type</label>
            <input
              id="type"
              name="type"
              type="text"
              value={threadDetails.type}
              onChange={handleChange}
            />
          </div>
        </div>

        <fieldset>
          <legend>Color</legend>

          <div className="flex-wrapper">
            <label htmlFor="color-name">Name</label>
            <input
              id="color-name"
              name="color-name"
              type="text"
              value={threadDetails.colorName}
              onChange={handleChange}
            />
          </div>
          <div className="flex-wrapper">
            <label htmlFor="color-id">Brand Id</label>
            <input
              id="color-id"
              name="color-id"
              type="text"
              value={threadDetails.colorId}
              onChange={handleChange}
            />
          </div>
          <div className="flex-wrapper">
            <label htmlFor="color-hex">Hex Code</label>
            <input
              id="color-hex"
              name="color-hex"
              type="text"
              value={threadDetails.colorHex}
              onChange={handleChange}
            />
          </div>
        </fieldset>

        <div>
          <fieldset id="fiber-content-wrapper">
            <legend>Content</legend>
            <label htmlFor="fiber-cotton">
              <input
                id="fiber-cotton"
                name="contentFiberType"
                type="radio"
                value="cotton"
                onChange={handleChange}
              />
              100% Cotton
            </label>

            <label htmlFor="fiber-polyester">
              <input
                id="fiber-polyester"
                name="contentFiberType"
                type="radio"
                value="polyester"
                onChange={handleChange}
              />
              100% Polyester
            </label>
          </fieldset>

          <fieldset id="cone-content-wrapper">
            <legend>Is this a serger thread cone?</legend>
            <label htmlFor="isCone-yes">
              <input
                id="isCone-yes"
                name="isCone"
                type="radio"
                value={true}
                onChange={handleChange}
              />
              Yes
            </label>
            <label htmlFor="isCone-no">
              <input
                id="isCone-yes"
                name="isCone"
                type="radio"
                value={false}
                onChange={handleChange}
              />
              No
            </label>
          </fieldset>

          <div className="flex-wrapper">
            <label htmlFor="brand">Length in Yards</label>
            <input
              id="quantity-yards"
              name="quantity-yards"
              type="text"
              value={threadDetails.quantityInYards}
              onChange={handleChange}
            />
          </div>

          <input id="thread-form-submit" type="submit" value="Submit" />
          
        </div>
      </form>
    </div>
  );
}

export default ThreadForm;