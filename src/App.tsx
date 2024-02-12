import React from 'react';

import './App.css';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {userSlice} from "./store/reducers/UserSlice";

function App() {
    const {increment,decrement} = userSlice.actions
    const {count} = useAppSelector(state => state.userReducer)
   const dispatch = useAppDispatch()
  return (
    <div className="App">
        <h1>{count}</h1>
      <button
      onClick={() => dispatch(increment(2))}>
          Инкремент
      </button>
        <button onClick={() => dispatch(decrement(2))}>
            Деккремент
        </button>
    </div>
  );
}

export default App;
