import React from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { galleryActions } from './actions/gallery';
import IconDog from './img/IconDog'

class Pictures extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      removeDisabled: this.props.categories.length <= 1 ? true : false,
    }
  }

  componentWillReceiveProps(nextProps) {
    let disabler = nextProps.categories.length <= 1 ? true : false;
    this.setState({
      removeDisabled: disabler
    })
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
        <div className="wrapper">
          <div className="wrapper_btn">
            <button 
              onClick={() => this.props.getCategory(this.props.currentCategory, this.props.categories, '-')}
              className="btn"
              disabled={this.state.removeDisabled}>
                prev
            </button>
            <button 
              onClick={() => this.props.addNewCategory(this.props.resourceCounter, this.props.resources)} 
              className="btn" 
              disabled={this.props.disableLoader}>
                add
            </button>
            <button 
              onClick={() => this.props.removeCategory(this.props.currentCategory, this.props.categories, this.props.images)} 
              className="btn" 
              disabled={this.state.removeDisabled} >
                remove
            </button> 
            <button 
              onClick={() => this.props.getCategory(this.props.currentCategory, this.props.categories, '+')} 
              className="btn"
              disabled={this.state.removeDisabled}>
                next
            </button>
          </div>
          <div className="wrapper_btn">
            { this.props.categories.map((category, index) =>
              <button onClick={(e) => this.props.selectCategory(category)} 
                      className={ this.props.currentCategory === category
                        ? "btn active"
                        : "btn"} 
                      key={index}>
                        {category}
              </button>
            )}
          </div>
        </div>
        
        <div className="wrapper">
          <Slider {...settings}>
            { this.props.images[this.props.currentCategory].map((image, index) =>
              <img key={index} src={image} alt=""/>
            )}
          </Slider>
        </div>

        <div className={this.props.imagesLoading ? "visible preloader" : "unvisible preloader"} >
          <IconDog />
        </div>

        <Link to='/'>Back</Link>
      </div>
    )
  }
}

Pictures.propTypes = {
  images: PropTypes.objectOf(PropTypes.array),
  resources: PropTypes.array,
  currentCategory: PropTypes.string,
  imagesLoading: PropTypes.bool,
  resourceCounter: PropTypes.number,
  disableLoader: PropTypes.bool,
}

// Pictures.defaultProps = {
//   currentCategory: 'default'
// };

const mapStateToProps = state => {
  const {images, currentCategory, resourceCounter, resources, disableLoader, imagesLoading} = state;

  const categories = Object.keys(images);

  return {
    images,
    categories,
    currentCategory,
    resourceCounter, 
    resources,
    disableLoader,
    imagesLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectCategory: (category) => dispatch(galleryActions.selectCategory(category)),
    addNewCategory: (counter, resources) => dispatch(galleryActions.addNewCategory(counter, resources)),
    getCategory: (category, categories, type) => dispatch(galleryActions.getCategory(category, categories, type)),
    removeCategory: (category, categories, images) => dispatch(galleryActions.removeCategory(category, categories, images)),
  }
}



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pictures);