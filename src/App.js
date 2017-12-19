import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Carousel from './Carousel';
// import LightBox from './LightBox';
import './index.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      names: [],
      currentCarousel: [
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

  componentWillMount() {
    this.fetchData();
  }

  fetchData() {
    fetch('https://5a2e6f220e07b70012083a6a.mockapi.io/img/images')
    .then(response => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
  
        // Examine the text in the response
        response.json()
        .then(data => {
          // console.log(data);
          let names = [];
          let sortedImg = {};
          data.forEach((element) => {
            names.push(element.name);
            sortedImg[element.name] = element.images
          });
          this.setState({
            names,
            sortedImg
          });
          // console.log(this.state);
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
  }

  handleClick(e, index) {
    // <Carousel img={this.state.sortedImg[index]} />
    let newCarouselImg = this.state.sortedImg[index]
    this.setState({
      currentCarousel: newCarouselImg
    });
    // console.log(newCarouselImg);
    // console.log(this.state.currentCarousel)
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper wrapper_btn">
          {this.state.names.map((key) => (
            <button className="btn" key={key} onClick={(e) => this.handleClick(e, key)}>{key}</button>
          ))}
        </div>
        <div className="wrapper">
          <Carousel current={this.state.currentCarousel}/>
        </div>
        <Link to='/'>Back</Link>
      </div>
    );
  }
}

export default App;
