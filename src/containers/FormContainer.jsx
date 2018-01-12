import React from 'react';
import { Form, Text, TextArea } from 'react-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { formActions } from '../actions/form';

import '../css/form.css';

class SimpleForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      submitState: true,
      errors: {
        name: false,
        email: false,
        message: false,
      }
    };

    this.errorValidator = this.errorValidator.bind(this);   
    this.successValidator = this.successValidator.bind(this);   
    this.errorHandler = this.errorHandler.bind(this);
  }

  errorValidator = (values) => {
    return {
      name: values.name && values.name && values.name.match( /\D/ )  
        ? true
        : false,
      email: values.email && values.email.match( /^[\w!#$%&'*+/=?^`{|}~-]+(\.[\w!#$%&'*+/=?^`{|}~-]+)*@(([\w-]+\.)+[A-Za-z]{2,6}|\[\d{1,3}(\.\d{1,3}){3}\])$/ )
        ? true
        : false,
      message: values.message 
        ? true
        : false,
    };
  };
  
  successValidator = (values, errors) => { 
    return {
      name: this.errorHandler(values, errors),
      email: this.errorHandler(values, errors),
      message: this.errorHandler(values, errors),
    };
  };

  errorHandler = (val, err) => {
    this.setState({
      errors: {
        name: err.name,
        email: err.email,
        message: err.message,
      }
    })

    if (err.name && err.email && err.message) {
      this.setState({
        submitState: false,
      });
    } else {
      this.setState({
        submitState: true,
      });
    }

  }

  render () {
    return (
      <Form
        validateSuccess={this.successValidator}
        validateError={this.errorValidator}
        dontValidateOnMount={true}
        onSubmit={values => this.props.submitToState({values})}>
        { formApi => (
          <form onSubmit={formApi.submitForm} id="form1" className="form">
            <div className={this.state.errors.name ? 'form-group success' : 'form-group error'}>
              <label htmlFor="name" className="label">Name</label>
              <Text field="name" id="name"/>
            </div>
            <div className={this.state.errors.email ? 'form-group success' : 'form-group error'}>
              <label htmlFor="email" className="label">Email</label>
              <Text field="email" id="email"/>
            </div>
            <div className={this.state.errors.message ? 'success form-group' : 'error form-group'}>
              <label htmlFor="message" className="label">Message</label>
              <TextArea field="message" id="message"/>
            </div>
            <button type="submit" className="btn btn-primary" disabled={this.state.submitState}>Submit</button>
            <Link to='/'>Back</Link>
          </form>
        )}
      </Form>
    );
  }
}

const mapStateToProps = state => {

  return {
    state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submitToState: (values) => dispatch(formActions.submitToState(values)),
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpleForm);