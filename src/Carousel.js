import React from 'react';
import Slider from 'react-slick';
import './carousel.css';
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";


export class Carousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      images: [
        "http://via.placeholder.com/500x300",
        "http://via.placeholder.com/500x300",
        "http://via.placeholder.com/500x300",
        "http://via.placeholder.com/500x300",
        "http://via.placeholder.com/500x300",
        "http://via.placeholder.com/500x300",
        "http://via.placeholder.com/500x300",
        "http://via.placeholder.com/500x300"
      ]
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e, index) {
    console.log(index);
  }

  render() {
    let settings = {
      dots: true,
      arrows: false,
      slidesToShow: 4,
      slidesToScroll:4,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll:3,
        }
      }, {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
          slidesToScroll:2,
          arrows: true,
          dots: false,
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1,
          arrows: true,
          dots: false,
        }
      }]
    };

    return (
      <Slider {...settings}>
        {this.state.images.map((image, key) => (
          <div key={key}><img src={image} alt="" key={key} onClick={(e) => this.handleClick(e, key)} /></div>
        ))}
      </Slider>
    );
  }
}