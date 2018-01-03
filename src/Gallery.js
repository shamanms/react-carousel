import React from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

class Pictures extends React.Component {

  constructor(props) {
    super(props);

    this.prevImg = this.prevImg.bind(this);
    this.nextImg = this.nextImg.bind(this);
    this.selectImg = this.selectImg.bind(this);
  }

  prevImg() {
    let prewCategoryInfo = {}

    if (this.props.currentCategory.index !== 0 && this.props.currentCategory.index) {
      prewCategoryInfo.index = this.props.currentCategory.index - 1;
    } else {
      prewCategoryInfo.index = this.props.categories.length - 1;
    }

    prewCategoryInfo.name = this.props.categories[prewCategoryInfo.index];

    prewCategoryInfo.images = this.props.images[prewCategoryInfo.name]

    console.log(prewCategoryInfo)

    this.props.onSelectCategory(prewCategoryInfo);
  }

  nextImg() {
    let nextCategoryInfo = {}

    if (this.props.currentCategory.index === 0) {
      nextCategoryInfo.index = this.props.currentCategory.index + 1;
    } else if (!this.props.currentCategory.index || this.props.currentCategory.index === this.props.categories.length -1) {
      this.props.currentCategory.index = 0;
      nextCategoryInfo.index = this.props.currentCategory.index;
    } else {
      nextCategoryInfo.index = this.props.currentCategory.index + 1;
    }
    
    nextCategoryInfo.name = this.props.categories[nextCategoryInfo.index];

    nextCategoryInfo.images = this.props.images[nextCategoryInfo.name]

    this.props.onSelectCategory(nextCategoryInfo);
  }

  selectImg(e, category, index){
    let categoryInfo = {
      name: category,
      index: index,
      images: this.props.images[category],
    };
    this.props.onSelectCategory(categoryInfo);

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
            <button onClick={this.prevImg} className="btn">prev</button>
            <button className="btn">add</button>
            <button className="btn">remove</button>            
            <button onClick={this.nextImg} className="btn">next</button>
          </div>
          <div className="wrapper_btn">
            { this.props.categories.map((category, index) =>
              <button onClick={(e) => this.selectImg(e, category, index)} className="btn" key={index}>{category}</button>
            )}
          </div>
        </div>
        
        <div className="wrapper">
          <Slider {...settings}>
            { this.props.currentImg.map((image, index) =>
              <img key={index} src={image} alt=""/>
            )}
          </Slider>
        </div>

        <Link to='/'>Back</Link>
      </div>
    )
  }
}

export default connect(
  state => ({
    images: state.images,
    categories: state.categories,
    currentImg: state.currentCategory.images,
    currentCategory: state.currentCategory
  }),
  dispatch => ({
    onSelectCategory: (categoryInfo) => {
      dispatch({type: 'CHOOSE_IMG', payload: categoryInfo})
    },
    onPrevCategory: (prewCategoryInfo) => {
      dispatch({type: 'CHOOSE_IMG', payload: prewCategoryInfo})
    }
  })
)(Pictures);
