import React from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

class Pictures extends React.Component {

  constructor(props) {
    super(props);

    this.selectImg = this.selectImg.bind(this);
  }

  selectImg(e, category){
    // console.log(category)
    let newCurrentImg = this.props.images[category];
    // console.log(newCurrentImg)
    this.props.onSelectCategory(newCurrentImg)
  }

  render() {
    // console.log('this.props.images', this.props.images)
    // console.log('this.props.categories',this.props.categories)

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
        <div className="wrapper wrapper_btn">
          { this.props.categories.map((category, index) =>
            <button onClick={(e) => this.selectImg(e, category)} className=
            "btn" key={index}>{category}</button>
          )}
        </div>
        
        <div className="wrapper">
          <Slider {...settings}>
            { this.props.current.map((image, index) =>
              <img key={index} src={image} alt=""/>
            )}
          </Slider>
        </div>

        <Link to='/'>Back</Link>
      </div>
    )
  }
}

// export default Pictures
export default connect(
  state => ({
    images: state.images,
    categories: state.categories,
    current: state.current
  }),
  dispatch => ({
    onSelectCategory: (categoryName) => {
      dispatch({type: 'CHOOSE_IMG', payload: categoryName})
    }
  })
)(Pictures);
