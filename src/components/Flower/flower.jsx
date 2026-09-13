import React from 'react';

function Flower(props) {
  const flowerStyle = {
    backgroundColor: props.petalsColor,
    color: props.centerColor,
    padding: '15px',
    borderRadius: '8px',
    textAlign: 'center',
    margin: '10px auto',
    width: '200px',
    cursor: 'pointer'
  };

  const handleClick = () => {
    alert(`אני פרח מסוג ${props.flowerName}`);
  };

  return (
    <div style={flowerStyle} onClick={handleClick}>
        <h3>שם הפרח: {props.flowerName}</h3>
        <p>צבע עלי כותרת: {props.petalsColor}</p>
        <p>צבע עלה מרכזי: {props.centerColor}</p>
    </div>
  );
}

export default Flower;