// make React available
import React, { useState, useContext } from "react";
import { GuidesContext } from "../Context";
// make the ReactDOM available, necessary for rendering the component
import ReactDOM from 'react-dom';

// make the App component available
import GuideForm from '../components/GuideForm';


// this is the test case
it('Adds Guide without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');

  // render the component, this is the actual test, if something is wrong it will fail here

  ReactDOM.render(
    <GuidesContext.Provider value={[[], ()=>{}]}>
      <GuideForm />
    </GuidesContext.Provider>
  , div);

  // clean up code
  ReactDOM.unmountComponentAtNode(div);
});