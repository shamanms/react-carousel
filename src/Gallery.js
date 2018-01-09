import React from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

import { galleryActions } from './actions/gallery';

class Pictures extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      removeDisabled: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    let x = nextProps.categories.length <= 1 ? true : false;
    this.setState({
      removeDisabled: x
    })
    console.log(nextProps.categories.length)
    console.log(this.state)
    console.log(x)
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

        <Link to='/'>Back</Link>
      </div>
    )
  }
}



const mapStateToProps = state => {
  const {images, currentCategory, resourceCounter, resources, disableLoader} = state;

  const categories = Object.keys(images);

  // let removeDisabled = false;
  // if (categories.length <= 1) {
  //   removeDisabled = true;    
  // }

  return {
    images,
    categories,
    currentCategory,
    resourceCounter, 
    resources,
    disableLoader,
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