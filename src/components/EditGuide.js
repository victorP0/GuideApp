import React, { useState, useContext } from "react";
import { GuidesContext } from "../Context";
import Modal from "react-modal";

export default function EditGuide({ guide }) {
  console.log(guide);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [guides, setGuides] = useContext(GuidesContext);

  const handleEdit = (e) => {
    e.preventDefault();
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
        <h2>Hello</h2>
        <form className="edit-form">
          <input
            type="text"
            value={guide.title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            value={guide.text}
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
