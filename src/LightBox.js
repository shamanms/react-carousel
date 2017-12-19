import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import IconBear from './img/IconBear';
import IconCat from './img/IconCat';
import IconDog from './img/IconDog';

class LightBox extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <IconBear />
        <IconCat />
        <IconDog />
        <Link to='/'>Back</Link>
      </div>
    );
  }
}

export default LightBox;
