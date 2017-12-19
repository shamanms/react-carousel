import React from 'react';
import Slider from 'react-slick';
import Modal from 'react-modal';
import IconCancel from './img/IconCancel'
import './carousel.css';
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleClick(e, index) {
    this.setState({
      modalIsOpen: true,
      openImg: index
    })
  }
 
  closeModal() {
    this.setState({
      modalIsOpen: false
    });
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
      <div>
        <Slider {...settings}>
          {this.props.current.map((image, key) => (
            <button key={key} onClick={(e) => this.handleClick(e, image)}>
              <img src={image} alt="" key={key}/>
            </button>
          ))}
        </Slider>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          className="modal-content"
          overlayClassName="modal-overlay"
          ariaHideApp={false}
        >
          <div className="modal-inner">
            <button className="modal-close" onClick={this.closeModal}>
              <IconCancel />
            </button>
            <img src={this.state.openImg} alt="bigImg" className="modal-img"/>
          </div>
        </Modal>
      </div>
    );
  }
};

export default Carousel;