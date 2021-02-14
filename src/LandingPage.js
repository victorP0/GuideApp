import React from "react";
import { Route} from 'react-router-dom';
import App from "./App"

function LandingPage() {
    return (
      <div>
        <div>
          <Route exact path='/' component={Welcome} />
          <Route exact path='/guides' component={App} />
        </div>
  
      </div>
    );
  }
  
  const Welcome = props => {
    return (
      <div className="landing">
      <div className="welcome">
      <h2 className="LP-title">Welcome to the Guides app!</h2>
      <p className="LP-content">The Guides app allows you to create and publish guides on the internet!</p>
      <button className="LP-enter" onClick={() => { props.history.push('/guides') }}>Enter</button>
      </div>
      </div>
    );
  }
  
  export default LandingPage;