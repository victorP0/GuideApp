import React, { useContext } from "react";
import ReactDOM from 'react-dom';
import { GuidesContext } from "../Context";
import GuideList from "../components/GuideList";

it('Loads Guide without crashing', () => {
    // first create a DOM element to render the component into
    const div = document.createElement('div');
  
    // render the component, this is the actual test, if something is wrong it will fail here
  
    ReactDOM.render(
        <GuidesContext.Provider value={[[], ()=>{}]}>
          <GuideList />
        </GuidesContext.Provider>
      , div);
  
    // clean up code
    ReactDOM.unmountComponentAtNode(div);
  });