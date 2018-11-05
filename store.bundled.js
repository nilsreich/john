import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

const INCREMENT = 'INCREMENT';

const INITIAL_STATE = {
  clicks: 8
};


const counter = (state =  INITIAL_STATE, action) =>{ 
  switch (action.type) { 
    case INCREMENT: 
      return [state,
        {
          clicks: state.clicks + 10
        }
      ];
      default:
        return state
  }
};

const devCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  state => state,
  devCompose(
    combineReducers({counter}),
    applyMiddleware(thunk))
);

// Initially loaded reducers.
store.addReducers({
  counter
});

export { store };
