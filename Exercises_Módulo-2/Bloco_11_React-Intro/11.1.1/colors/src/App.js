import React from 'react';
import './App.css';
import colors from './colorsData'

class App extends React.Component {
  render() {
    return (
      <main>
        <ul>
         {colors.map((color) => (
           <li key={color.hex}> {color.name}</li>
         ))}
        </ul>

        Hello T16B 👋🏽
      </main>
    );
  }
}

export default App;
