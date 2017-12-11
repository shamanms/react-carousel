import React from 'react';

export class Button extends React.Component {
  componentWillMount() {
    fetch('https://5a2e6f220e07b70012083a6a.mockapi.io/img/images')
      .then(
        function(response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }
    
          // Examine the text in the response
          response.json().then(function(data) {
            console.log(data);
          });
        }
      )
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
    alert('work');
  }

  
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  render() {
    

    return (
      <button className="btn">1</button>
    );
  }
}