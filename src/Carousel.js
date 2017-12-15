import React from 'react';
import Slider from 'react-slick';
import Modal from 'react-modal';
import './carousel.css';
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";

const customStyles = {

  overlay : {
    backgroundColor   : 'rgba(0, 0, 0, 0.7)'
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    backgroundColor       : '#419be0',
    border                : '0'
  }
};

class IconCancel extends React.Component {
  render() {
    return (
      <svg x="0px" y="0px" viewBox="0 0 212.982 212.982">
        <g>
	        <path d="M131.804,106.491l75.936-75.936c6.99-6.99,6.99-18.323,0-25.312 c-6.99-6.99-18.322-6.99-25.312,0l-75.937,75.937L30.554,5.242c-6.99-6.99-18.322-6.99-25.312,0c-6.989,6.99-6.989,18.323,0,25.312	l75.937,75.936L5.242,182.427c-6.989,6.99-6.989,18.323,0,25.312c6.99,6.99,18.322,6.99,25.312,0l75.937-75.937l75.937,75.937 c6.989,6.99,18.322,6.99,25.312,0c6.99-6.99,6.99-18.322,0-25.312L131.804,106.491z"/>
        </g>
      </svg>
    )
  }
};

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
            <button key={key} onClick={(e) => this.handleClick(e, image)}><img src={image} alt="" key={key}/></button>
          ))}
        </Slider>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
          <div className="modal-content">
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