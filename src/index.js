import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {PostProvider} from './context/post';
import {MasonryColumnProvider} from './context/masonryColumn';
import SocialsProvider from './context/social';
import {UtilsProvider} from './context/utils';
ReactDOM.render(
  <PostProvider>
  <UtilsProvider>
    <SocialsProvider>
      <MasonryColumnProvider>
        <App />
      </MasonryColumnProvider>
    </SocialsProvider>
  </UtilsProvider>
  </PostProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
