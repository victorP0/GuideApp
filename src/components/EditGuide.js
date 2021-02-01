import React, { useState, useContext } from "react";
import { GuidesContext } from "../Context";
import Modal from "react-modal";

export default function EditGuide({ guide }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [title, setTitle] = useState(guide.title);
  const [text, setText] = useState(guide.text);
  const [guides, setGuides] = useContext(GuidesContext);

  const handleEdit = (e) => {
    e.preventDefault();


    for(let i=0; i<guides.length; i++) {
      if(guides[i].id === guide.id) {
        guides[i].title = title;
        guides[i].text = text;
      }
    }
    console.log(guides);
    setGuides(guides);
    //setGuides([...guides.filter(e=>e.id !== guide.id), {guide.id, title, text, }])
  };

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Edit</button>
      <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <h2>Edit Guide</h2>
        <form className="edit-form">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            value={text}
            className="guide-text"
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick = {handleEdit}>Submit</button>
        </form>
        <button onClick={closeModal}>close</button>
      </Modal>
    </div>
  );
}
