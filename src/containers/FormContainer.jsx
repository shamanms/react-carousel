import React from 'react';
import { Form, Text, TextArea } from 'react-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { formActions } from '../actions/form';

import '../css/form.css';

class SimpleForm extends React.Component {
  constructor(props) {
    super(props);

    this.errorValidator = this.errorValidator.bind(this);   
    this.successValidator = this.successValidator.bind(this); 
  }

  errorValidator = (values) => {
    return {
      name: !values.name || values.name.trim() === '' 
        ? 'should not be empty' 
        : null,
      email: !values.email || values.email.trim() === '' 
        ? 'should not be empty' 
        : null,
      message: !values.message || values.message.trim() === '' 
        ? 'should not be empty' 
          : null,
    };
  };
  
  successValidator = (values) => { 
    return {
      name: values.name && values.name.match( /\D/ ) 
        ? null 
        : 'should contain letters',

      email: values.email && values.email.match( /^[\w!#$%&'*+/=?^`{|}~-]+(\.[\w!#$%&'*+/=?^`{|}~-]+)*@(([\w-]+\.)+[A-Za-z]{2,6}|\[\d{1,3}(\.\d{1,3}){3}\])$/ ) 
        ? null
        : 'enter valid email',
    };
  };

  submiterToState = (values, formApi) => {
    this.props.submitToState(values);
    formApi.resetAll();
  }

  render () {
    return (
      <Form
        validateSuccess={this.successValidator}
        validateError={this.errorValidator}
        dontValidateOnMount={true}
        onSubmit={(values, getApi, formApi) => this.submiterToState(values, formApi)}
      >
        { formApi => (
          <form onSubmit={formApi.submitForm} id="form1" className="form">
            <div className={
              formApi.errors.name || formApi.successes.name
                ? "form-group error"
                : "form-group"
            }>
              <label htmlFor="name" className="label">Name</label>
              {formApi.errors.name ? <span> {formApi.errors.name} </span> : false}
              {formApi.successes.name ? <span> {formApi.successes.name} </span> : false}
              <Text field="name" id="name" />
            </div>
            <div className={
              formApi.errors.email || formApi.successes.email
                ? "form-group error"
                : "form-group"
            }>
              <label htmlFor="email" className="label">Email</label>
              {formApi.errors.email ? <span> {formApi.errors.email} </span> : false}
              {formApi.successes.email ? <span> {formApi.successes.email} </span> : false}
              <Text field="email" id="email" />
            </div>
            <div className={
              formApi.errors.message
                ? "form-group error"
                : "form-group"
            }>
              <label htmlFor="message" className="label">Message</label>
              {formApi.errors.message ? <span> {formApi.errors.message} </span> : false}
              <TextArea field="message" id="message" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <Link to='/'>Back</Link>
          </form>
        )}
      </Form>
    );
  }
}

const mapStateToProps = state => {
const submitState = state.form.submitState

  return {
    submitState
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