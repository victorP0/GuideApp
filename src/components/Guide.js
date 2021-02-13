import React, { useContext } from "react";
import { GuidesContext } from "../Context";
import EditGuide from "./EditGuide";
import config from './config';

function Guide({ title, text, author, url, id, guide }) {
  const [guides, setGuides] = useContext(GuidesContext);

  const handleDeleteGuide = () => {
    // setGuides([...guides.filter((e) => e.id !== guide.id)]);
    fetch(`${config.API_ENDPOINT}/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${config.API_KEY}`
      },
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
      })
      .then(()=>{
        setGuides([...guides.filter((e) => e.id !== guide.id)]); 
      })
      .catch(error => {
        console.error({ error })
      })
  };

  return (
    <div className="guide-item">
      <h3 className="guide-item-title">{title}</h3>
      <p className="guide-item-text">{text}</p>
      <p className="guide-item-author">Author: {author}</p>
      <p className="guide-item-url">URL: {url}</p>
      <div className="guide-item-buttons">
      <EditGuide guide={guide} />
      <button className="delete-button" onClick={handleDeleteGuide}> Delete</button>
      </div>
    </div>
  );
}

export default Guide;
