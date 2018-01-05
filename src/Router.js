import React from 'react';
import { Route, Switch } from 'react-router-dom';


import App from './App';
import LightBoxWrapp from './LightBox';
import Home from './Home';
import Pictures from './Gallery'

export const RoutApp = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/carousel' component={App}/>
      <Route path='/lightbox' component={LightBoxWrapp}/>
      <Route path='/pictures' component={Pictures}/>
    </Switch>
  </main>
)