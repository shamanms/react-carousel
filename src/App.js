import React, { Component } from 'react';
import Button from './Button';
import Carousel from './Carousel';
import './index.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper wrapper_btn">
          <Button />
        </div>
        <div className="wrapper">
          <Carousel />
        </div>
      </div>
    );
  }
}

export default App;
