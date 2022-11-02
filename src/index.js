import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

/* 액션 생성 함수 만들기 */
export const increase = () => ({
  type: 'INCREASE',
});

export const decrease = () => ({
  type: 'DECREASE',
});

// export const setNumber = (num) => ({
//   type: 'SET_NUMBER',
//   payload: num,
// });

const count = 1;

/* 리듀서 만들기 */

const counterReducer = (state = count, action) => {
  switch (action.type) {
    case 'INCREASE':
      return state + 1;

    case 'DECREASE':
      return state - 1;

    // case 'SET_NUMBER':
    //   return action.payload;
  }
};

const store = createStore(counterReducer);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
