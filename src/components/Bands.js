import React from 'react';

const Bands = props => {
  // console.log(props.bands)
  const showBands = props.bands.map((band, index) => {
      return <li key={index}>{band.name}</li>;
    });

  // const bands = props.bands.map((band, index) => {
  //   return <li key={index}>{band.name}</li>;
  // });

  // console.log(props.bands)

  return (
    <div>
      {showBands}
    </div>
  )
};

export default Bands;
