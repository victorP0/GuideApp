import React, {useState} from "react";
import config from './components/config';
import "./styles.css";
import GuideForm from "./components/GuideForm";
import GuideList from "./components/GuideList";
import {GuidesContext} from './Context';

function App() {

  //context
  const [guides, setGuides] = useState([]);

  componentDidMount() {
    fetch(config.API_ENDPOINT, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${config.API_KEY}`
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status)
        }
        return res.json()
      })
      .then(this.setGuides)
      .catch(error => this.setState({ error }))
  }


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
