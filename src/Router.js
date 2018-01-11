import React from 'react';
import { Route, Switch } from 'react-router-dom';


import App from './containers/App';
import LightBoxWrapp from './containers/LightBox';
import Home from './containers/Home';
import Pictures from './containers/Gallery'
import SimpleForm from './containers/FormContainer'

export const RoutApp = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/carousel' component={App}/>
      <Route path='/lightbox' component={LightBoxWrapp}/>
      <Route path='/pictures' component={Pictures}/>
      <Route path='/form' component={SimpleForm}/>
    </Switch>
  </main>
)