import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import ScrollToTop from './ScrollToTop'
import App from './App';
import LightBoxWrapp from './LightBox';
import Home from './Home';
import Pictures from './Gallery'
import registerServiceWorker from './registerServiceWorker';

const RoutApp = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/carousel' component={App}/>
      <Route path='/lightbox' component={LightBoxWrapp}/>
      <Route path='/pictures' component={Pictures}/>
    </Switch>
  </main>
)

const initialState = {
  images: {
    nature: ['https://placeimg.com/640/480/nature','https://placeimg.com/640/480/nature', 'https://placeimg.com/640/480/nature', 'https://placeimg.com/640/480/nature', 'https://placeimg.com/640/480/nature', 'https://placeimg.com/640/480/nature', 'https://placeimg.com/640/480/nature', 'https://placeimg.com/640/480/nature', 'https://placeimg.com/640/480/nature'],
    animals: ['http://placecorgi.com/640/480','https://placeimg.com/640/480/animals', 'http://placecorgi.com/640/480','https://placeimg.com/640/480/animals', 'http://placecorgi.com/640/480','https://placeimg.com/640/480/animals', 'http://placecorgi.com/640/480','https://placeimg.com/640/480/animals'],
    architecture: ['https://placeimg.com/640/480/arch', 'https://placeimg.com/640/480/arch', 'https://placeimg.com/640/480/arch', 'https://placeimg.com/640/480/arch', 'https://placeimg.com/640/480/arch', 'https://placeimg.com/640/480/arch', 'https://placeimg.com/640/480/arch', 'https://placeimg.com/640/480/arch', 'https://placeimg.com/640/480/arch', 'https://placeimg.com/640/480/arch', 'https://placeimg.com/640/480/arch', 'https://placeimg.com/640/480/arch', 'https://placeimg.com/640/480/arch', 'https://placeimg.com/640/480/arch', 'https://placeimg.com/640/480/arch', 'https://placeimg.com/640/480/arch'],
    tech: ['https://placeimg.com/640/480/tech', 'https://placeimg.com/640/480/tech','https://placeimg.com/640/480/tech','https://placeimg.com/640/480/tech','https://placeimg.com/640/480/tech','https://placeimg.com/640/480/tech','https://placeimg.com/640/480/tech','https://placeimg.com/640/480/tech','https://placeimg.com/640/480/tech']
  },
  categories: ['nature', 'animals', 'architecture', 'tech'],
  current: ["http://via.placeholder.com/640x480"],
}

function theme(state = initialState, action) {
  // console.log(state)  
  // console.log(action)

  if (action.type === 'CHOOSE_IMG') {
    return {
      ...state,
      current: action.payload
    }
  } 
  return state;
}

const store = createStore(theme, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

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
