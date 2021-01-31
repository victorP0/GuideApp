import React, { useContext } from "react";
import { GuidesContext } from "../Context";
import EditGuide from './EditGuide';

function Guide({ title, text, author, url, guide }) {

    const [guides, setGuides] = useContext(GuidesContext);

    const handleDeleteGuide = () => {
      setGuides([...guides.filter((e) => e.id !== guide.id)]);
    };

    const handleEditGuide = () => {


      };

  return (
    <div className="guide-item">
      <h3 className="guide-item-title">{title}</h3>
      <p className="guide-item-text">{text}</p>
      <p className="guide-item-author">{author}</p>
      <p className="guide-item-url">{url}</p>
    <EditGuide guide ={guide}/>
      {/* <button onClick = {handleEditGuide}> Edit</button> */}
      <button onClick = {handleDeleteGuide}> Delete</button>
    </div>
  );
}

export default Guide;
