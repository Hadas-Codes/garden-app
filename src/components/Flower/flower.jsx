import React from 'react';

function Flower({ 
  flowerName = "פרח ברירת מחדל", 
  petalsColor = "red", 
  centerColor = "blow" 
}) {
  const flowerStyle = {
    backgroundColor: petalsColor,
    color: centerColor,
    padding: '15px',
    borderRadius: '8px',
    textAlign: 'center',
    margin: '10px auto',
    width: '200px',
    cursor: 'pointer'
  };

  const handleClick = () => {
    alert(`אני פרח מסוג ${flowerName}`);
  };

  return (
    <div style={flowerStyle} onClick={handleClick}>
        <h3>שם הפרח: {flowerName}</h3>
        <p>צבע עלי כותרת: {petalsColor}</p>
        <p>צבע עלה מרכזי: {centerColor}</p>
    </div>
  );
}

export default Flower;