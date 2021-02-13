import React, {useState, useEffect} from "react";
import config from './components/config';
import "./styles.css";
import GuideForm from "./components/GuideForm";
import GuideList from "./components/GuideList";
import {GuidesContext} from './Context';

function App() {

  //context
  const [guides, setGuides] = useState([]);

  useEffect(() => {
    console.log(config);
    fetch(`${config.API_ENDPOINT}`, {
      headers: new Headers({
        Authorization: `Bearer ${config.API_KEY}`,
      }),
    })
      .then((Res) => {
        console.log("There was an attempt");

        if (!Res.ok) {
          return Res.json().then((e) => Promise.reject(e));
        }

        return Res.json();
      })
      .then((guides) => setGuides(guides))
      .catch((error) => console.log(error));
  }, []);


  return (
    <GuidesContext.Provider value={[guides, setGuides]}>
    <main className="App">
      <div className="introduction">
      <h1 className="title">Write a guide</h1>
        <p className="instruction">The Guides App allows you to write and publish guides on the internet!</p>
      </div>
      <GuideForm />
      <GuideList />
    </main>
    </GuidesContext.Provider>
  );
}

export default App;
