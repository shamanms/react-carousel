import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Carousel} from './Carousel';
import {Button} from './Button';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Carousel />, document.getElementById('carousel-wrapper'));
ReactDOM.render(<Button />, document.getElementById('button-wrapper'));

registerServiceWorker();
