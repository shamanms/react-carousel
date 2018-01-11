import React from 'react';
import { Form, Text, TextArea } from 'react-form';
import { connect } from 'react-redux';
import { formActions } from '../actions/form';

class SimpleForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      submitState: true,
    };

    this.errorValidator = this.errorValidator.bind(this);   
    this.successValidator = this.successValidator.bind(this);   
    this.submitEnabler = this.submitEnabler.bind(this);   
  }

  errorValidator = (values) => {
    return {
      name: !values.name || values.name.trim() === '' 
        ? document.querySelector('#name').classList.add('error') 
        : document.querySelector('#name').classList.remove('error'),
      email: !values.email || values.email.trim() === '' 
        ? document.querySelector('#email').classList.add('error') 
        : document.querySelector('#email').classList.remove('error'),
      message: !values.message || values.message.trim() === '' 
      ? document.querySelector('#message').classList.add('error') 
      : document.querySelector('#message').classList.remove('error'),
    };
  };
  
  successValidator = (values) => { 
    return {
      name: values.name && values.name.match( /\D/ ) 
        ? this.submitEnabler(values) 
        : document.querySelector('#name').classList.add('error'),

      email: values.email && values.email.match( /^[\w!#$%&'*+/=?^`{|}~-]+(\.[\w!#$%&'*+/=?^`{|}~-]+)*@(([\w-]+\.)+[A-Za-z]{2,6}|\[\d{1,3}(\.\d{1,3}){3}\])$/ ) 
        ? this.submitEnabler(values) 
        : document.querySelector('#email').classList.add('error'),
    };
  };

  submitEnabler = (values) => {
    let truthyName;
    let truthyEmail;
    if (values.name && values.email) {
      truthyName = values.name.match( /^\D/ );
      truthyEmail = values.email.match( /^[\w!#$%&'*+/=?^`{|}~-]+(\.[\w!#$%&'*+/=?^`{|}~-]+)*@(([\w-]+\.)+[A-Za-z]{2,6}|\[\d{1,3}(\.\d{1,3}){3}\])$/ );
    } else {
      return
    }

    if (truthyName && truthyEmail) {
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
        onSubmit={(values) => this.props.submitToState(values)}>
        { formApi => (
          <form onSubmit={formApi.submitForm} id="form1" className="mb-4">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <Text field="name" id="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Text field="email" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <TextArea field="message" id="message" />
            </div>
            <button type="submit" className="btn btn-primary" disabled={this.state.submitState}>Submit</button>
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