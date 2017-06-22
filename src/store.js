import { createStore } from 'redux';
import { storage } from './storage';

const initialState = {
  userName: '',
  isAuth: false
};

function reducer(state = initialState, action) {
  console.log('reducer', state, action);
  switch (action.type) {
    case 'UPDATE':
      storage.set('state', JSON.stringify(state), () => {
        let newStorage = storage.get('state');
        console.log('updated', newStorage);
      });
      return Object.assign({}, state);

    case 'DECREMENT':
      return state - 1;

    default:
      return state;
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
export let store = createStore(reducer);
// export let store = 0;