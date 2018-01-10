import React from 'react';
import { Form, Text } from 'react-form';

const errorValidator = (values) => {
  return {
    username: !values.username || values.username.trim() === '' ? 'Username is a required field' : null
  };
};

const successValidator = (values, errors) => {
  return {
    username: !errors.username ? 'Awesome! your username is good to go!' : null
  };
};

const doesUsernameExist = username => new Promise( ( resolve, reject ) => setTimeout(() => {
  // Simulate username check
  if (['joe', 'tanner', 'billy', 'bob'].includes(username)) {
    resolve( { error: 'That username is taken', success: null } );
  }
  // Simulate request faulure
  if ( username === 'reject' ) {
    reject('Failure while making call to validate username does not exist');
  }
  // Sumulate username success check
  resolve({});
}, 2000));

const asyncValidators = {
  username: async ( username ) => {
    const validations = await doesUsernameExist( username );
    return validations;
  }
};

class AsynchronousFormValidation extends React.Component {
  render() {
    return (
      <div>
        <Form
          validateError={errorValidator}
          validateSuccess={successValidator}
          asyncValidators={asyncValidators}>
          { formApi => (
            <form onSubmit={formApi.submitForm} id="form6">
              <label htmlFor="username">Username</label>
              <Text field="username" id="username" />
              <button type="submit" className="mb-4 btn btn-primary">Submit</button>
            </form>
          )}
        </Form>
      </div>
    );
  }
}

export default AsynchronousFormValidation;