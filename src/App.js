import React from 'react';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from './index.js';

export default function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state);

  const plusNum = () => {
    dispatch(increase());
  };

  const minusNum = () => {
    dispatch(decrease());
  };

  return (
    <div className="container">
      <h1>{`Count: ${counter}`}</h1>
      <div>
        <button className="plusBtn" onClick={plusNum}>
          +
        </button>
        <button className="minusBtn" onClick={minusNum}>
          -
        </button>
      </div>
    </div>
  );
}
