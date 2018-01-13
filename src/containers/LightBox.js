import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Lightbox from 'react-images';

class LightBoxWrapp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        { src: 'http://via.placeholder.com/500x300' }, 
        { src: 'http://via.placeholder.com/500x300' }
      ],
      lightboxIsOpen: false,
      currentImage: 0
    }

    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this);
  }

  componentWillMount() {
    this.fetchData();
  }

  fetchData() {
    fetch('https://5a2e6f220e07b70012083a6a.mockapi.io/img/lightBoxImg')
    .then(response => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
  
        // Examine the text in the response
        response.json()
        .then(data => {
          console.log(data);
          
          this.setState({
            images: data
          });

          console.log(this.state);
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
  }

  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
      lightboxIsOpen: true,
    });
  }

  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
      lightboxIsOpen: true,
    });
  }

  closeLightbox() {
    this.setState({
      lightboxIsOpen: false
    });
  }

  handleClick(index) {
    this.setState({
      currentImage: index,
      lightboxIsOpen: true
    })
  }

  render() {
    return (
      <div className="wrapper wrapper_lightbox">
        {this.state.images.map((item, key) => (

          <button key={key} onClick={(e) => this.handleClick(key)}>
            <img src={item.src} alt="" key={key}/>
          </button>
        ))}
        <Lightbox
          images={this.state.images}
          isOpen={this.state.lightboxIsOpen}
          currentImage={this.state.currentImage}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          onClose={this.closeLightbox}
        />
        <Link to='/'>Back</Link>
      </div>
    );
  }
}

export default LightBoxWrapp;
