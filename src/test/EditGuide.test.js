import { GuidesContext } from "../Context";
// make React available
import React,  { useState, useContext }  from 'react';
import Modal from "react-modal";
import ReactDOM from 'react-dom';
import config from '../components/config';

// make the App component available
import EditGuide from '../components/EditGuide';


// this is the test case
it('Adds Guide without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');

  // render the component, this is the actual test, if something is wrong it will fail here

  ReactDOM.render(
    <GuidesContext.Provider value={[[], ()=>{}]}>
      <EditGuide guide={""}/>
    </GuidesContext.Provider>
  , div);

  // clean up code
  ReactDOM.unmountComponentAtNode(div);
});