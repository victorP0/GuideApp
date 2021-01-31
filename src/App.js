import React, {useState} from "react";

import "./styles.css";
import GuideForm from "./components/GuideForm";
import GuideList from "./components/GuideList";
import {GuidesContext} from './Context';

function App() {

  //context
  const [guides, setGuides] = useState([]);

  return (
    <GuidesContext.Provider value={[guides, setGuides]}>
    <main className="App">
      <h1>Write a guide</h1>
      <GuideForm />
      <GuideList />
    </main>
    </GuidesContext.Provider>
  );
}

export default App;
