import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from './ScrollToTop'
import App from './App';
import LightBox from './LightBox';
import Home from './Home';
import registerServiceWorker from './registerServiceWorker';

const RoutApp = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/carousel' component={App}/>
      <Route path='/lightbox' component={LightBox}/>
    </Switch>
  </main>
)

const render = (App) => {
  ReactDOM.render(
    <BrowserRouter>
      <ScrollToTop>
        <RoutApp />
      </ScrollToTop>
    </BrowserRouter>,
    document.getElementById('root')
  );
};

render(App);



registerServiceWorker();
