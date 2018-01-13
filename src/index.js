import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

import ScrollToTop from './containers/ScrollToTop'
import App from './containers/App';
import { RoutApp } from './Router'
import { store } from './reducers/store'


const render = (App) => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop>
          <RoutApp />
        </ScrollToTop>
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  );
};

render(App);



registerServiceWorker();
