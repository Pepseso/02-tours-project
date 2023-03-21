import { useState } from 'react';

const Tour = ({ tour }) => {
  const [toggleInfo, setToggleInfo] = useState(false);
  const { id, image, info, name, price } = tour;
  return (
    <div>
      <h3>{name}</h3>
      <img src={image} alt={name} style={{ width: '200px' }} />
      <h4>Price : {price}</h4>
      {toggleInfo ? (
        <p>{info}</p>
      ) : (
        <button type='button' onClick={() => setToggleInfo(true)}>
          Read more
        </button>
      )}
      {toggleInfo && (
        <button type='button' onClick={() => setToggleInfo(false)}>
          Hide info
        </button>
      )}
    </div>
  );
};
export default Tour;
