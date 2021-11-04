import React from 'react';
import './App.css';
import colors from './colorsData'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      filterInput: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({filterInput:  event.target.value})
  };

  render() {
    const { filterInput } = this.state;
    return (
      <main>
        <input 
        // onChange={(event) => {this.handleChange(event)}} OUUU
        onChange={this.handleChange}
        value={ filterInput } 
        type='text' />
        <ul>
          {colors.filter((color) => color.name.includes(filterInput))
          .map((color) => (
            <li key={color.hex}>
              <div style={{ background: color.hex }} className='color-display' />
              {color.name}</li>
          ))}
        </ul>
      </main>
    );
  }
}

export default App;
