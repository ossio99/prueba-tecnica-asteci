import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import ReduxApp from './ReduxApp';
import './sass/app.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <ReduxApp /> */}
  </React.StrictMode>
);
