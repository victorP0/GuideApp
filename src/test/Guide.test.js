// make React available
import React, { useContext, useState } from "react";
import { GuidesContext } from "../Context";

// make the ReactDOM available, necessary for rendering the component
import ReactDOM from "react-dom";

// make the App component available
import Guide from "../components/Guide";

// this is the test case
it("Renders without crashing", () => {
  // first create a DOM element to render the component into
  const div = document.createElement("div");

  // render the component, this is the actual test, if something is wrong it will fail here

  ReactDOM.render(
    <GuidesContext.Provider value={[[], () => {}]}>
      <Guide
        title={""}
        text={""}
        author={""}
        url={""}
        id={""}
        guide={""}
      />
    </GuidesContext.Provider>,
    div
  );

  // clean up code
  ReactDOM.unmountComponentAtNode(div);
});
