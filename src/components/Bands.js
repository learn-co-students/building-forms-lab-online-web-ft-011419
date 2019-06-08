import React from 'react';

const Bands = props => {
  const showBands = props.bands.map((band, index) => {
      return <li key={index}>{band.name}</li>;
    });

  return (
    <div>
      {showBands}
    </div>
  )
};

export default Bands;
