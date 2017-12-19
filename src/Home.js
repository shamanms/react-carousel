import React  from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/carousel'>Carousel</Link></li>
        <li><Link to='/lightbox'>LightBox</Link></li>
      </ul>
    </nav>
  </header>
)


export default Home;