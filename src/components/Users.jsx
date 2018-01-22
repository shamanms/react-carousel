import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { formActions } from '../actions/form';

import IconRemove from '../img/IconRemove';
import IconEdit from '../img/IconEdit';

import '../css/userCards.css';

export class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: false,
      selectedCard: {
        name: null,
        id: null
      },
    };

    this.cardMenu = this.cardMenu.bind(this); 
    this.editCard = this.editCard.bind(this); 
    this.removeCard = this.removeCard.bind(this); 
  }

  cardMenu = (e, index, name) => {
    e.preventDefault()
    this.setState({
      menu: this.state.menu ? this.state.menu : !this.state.menu,
      selectedCard: {
        id: index,
        name: name
      }
    })
  }

  editCard = (id, name) => {
    console.log('edit',id, name)
  }

  removeCard = (id, name) => {
    this.setState({
      menu: false,
      selectedCard: {
        id: null,
        name: null
      }
    })
    this.props.removeUser(name);
  }

  render () {
    return (
      <div className="wrapper">
        <div className="wrapper_cards">
          { this.props.userList.map((e, index) =>
            <div key={index} className="card" onClick={(el) => this.cardMenu(el, index, e.name)}>
              <div className="name">{e.name}</div>
              <div className="email">{e.email}</div>
              <div className="message">{e.message}</div>
              <div className={this.state.menu && index === this.state.selectedCard.id
                              ? "card-menu shown" 
                              : "card-menu hide"}>
                <ul>
                  <li>
                    <button onClick={(el) => this.editCard(index, e.name)}><IconEdit/></button>
                  </li>
                  <li>
                    <button onClick={(el) => this.removeCard(index, e.name)}><IconRemove/></button>
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

    if (Object.keys(userObj[key]).length !== 0) {
      userList.push(userObj[key])
    }
  }
 
    return {
      userList
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      removeUser: (name) => dispatch(formActions.removeUser(name)),
    }
  }
  
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Users);