import React from 'react';

export class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
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
          console.log(data);
          this.setState({
            data
          });
          console.log(this.state);
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
  }
  
  render() {
    

    return (
      
      this.state.data.map((key) => (
        <button className="btn" key={key}>{key}</button>
      ))

      // <button className="btn">1</button>

    );
  }
}