import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import LandingPage from './LandingPage'
import "./styles.css";

// ReactDOM.render(<App />, document.getElementById('root'));
const rootElement = document.getElementById("root");

ReactDOM.render(
    <BrowserRouter>
    <React.StrictMode>
      <LandingPage />
    </React.StrictMode>
    </BrowserRouter>,
    rootElement
  );