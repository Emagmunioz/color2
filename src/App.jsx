import React, { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('#ffffff');

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div className="App" style={{ backgroundColor: color, padding: '20px' }}>
      <h1>Selector de Color</h1>
      <input type="color" value={color} onChange={handleColorChange} />
      <p>Color seleccionado: {color}</p>
    </div>
  );
}

export default App;