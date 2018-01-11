import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../css/userCards.css'

export class Users extends React.Component {
  render () {
    return (
      <div className="wrapper">
        <div className="wrapper_cards">
          { this.props.userList.map((e, index) =>
            <div key={index} className="card">
              <div className="name">{e.name}</div>
              <div className="email">{e.email}</div>
              <div className="message">{e.message}</div>
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