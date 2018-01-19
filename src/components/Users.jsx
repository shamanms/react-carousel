import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../css/userCards.css'

export class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: false,
      selectedCard: null,
    };

    this.deleteCard = this.deleteCard.bind(this); 
  }

  deleteCard = (e, index) => {
    e.preventDefault()
    this.setState({
      menu: true,
      selectedCard: index,
    })
  }

  render () {
    return (
      <div className="wrapper">
        <div className="wrapper_cards">
          { this.props.userList.map((e, index) =>
            <div key={index} className="card" onContextMenu={(e) => this.deleteCard(e, index)}>
              <div className="name">{e.name}</div>
              <div className="email">{e.email}</div>
              <div className="message">{e.message}</div>
              <div className={this.state.menu && index === this.state.selectedCard
                              ? "card-menu shown" 
                              : "card-menu hide"}>
                <ul>
                  <li>
                    <button>edit</button>
                  </li>
                  <li>
                    <button>remove</button>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
        <Link to='/'>Back</Link>
      </div>
    )
  }
}

Users.propTypes = {
  userList: PropTypes.array,
}

const mapStateToProps = state => {
  const userObj = state.form.users;
  let userList = [];

  for (const key in userObj) {
    userList.push(userObj[key])
  }

    return {
      userList
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
    }
  }
  
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Users);