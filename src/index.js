import React from 'react';
import ReactDom from 'react-dom';

import './index.css';
import App from './App';
import {ContextProvider} from './contexts/ContextProvider'

ReactDom.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById('root')
);

//  ReactDom.render(
//   <h1 className='underline text-3xl'>Your App</h1>,
//   document.getElementById('root')
// );

/**
 Learn context api

 rn i just know that wrapping my js with StateContext.Provider prevents long prop drilling
 */