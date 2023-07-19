import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/assets/styles/index.scss';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);