import React  from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/carousel'>Carousel</Link></li>
        <li><Link to='/lightbox'>LightBox</Link></li>
        <li><Link to='/pictures'>Pictures</Link></li>
        <li><Link to='/form'>Form</Link></li>
        <li><Link to='/users'>Users</Link></li>
      </ul>
    </nav>
  </header>
)


export default Home;