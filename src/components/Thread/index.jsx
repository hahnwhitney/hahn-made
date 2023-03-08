import React from 'react';

const Thread = ({
  brand,
  color,
  colorId,
  colorHex,
  content,
  quantityInYards,
  type,
  isCone,
}) => (
  <div className="card">
    <div className="thread-swatch" style={{ backgroundColor: colorHex || '#D3D3D3', border: colorHex === '#FFFFFF' ? '1px solid #D3D3D3' : 'none' }}/ >

    <div className="thread-info">
      <span>{brand} {type}</span>
      <br />
      <span className="capitalize">
        {color}
        {colorId && ` (#${colorId})`}
      </span>
      <br />
      <br />

      {content.map((item, i, arr) => {
        return (
          <span key={(`${item.fiberType}-${i}`).replace(/\s+/g, '-').toLowerCase()}>
            {`${item.percentage}% ${item.fiberType}`}
            {arr.length - 1 === i ? '' : ', '}
          </span>
        )
      })}

      <br />
      <span>{`${quantityInYards} yards`}</span>
    </div>

    {isCone && <div className="cone">cone</div>}
  </div>
);

export default Thread;
