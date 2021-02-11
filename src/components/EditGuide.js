import React, { useState, useContext } from "react";
import { GuidesContext } from "../Context";
import config from './config';
import Modal from "react-modal";

export default function EditGuide({ guide }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [title, setTitle] = useState(guide.title);
  const [text, setText] = useState(guide.text);
  const [guides, setGuides] = useContext(GuidesContext);
  const [url, setURL] = useState("");

  const handleEdit = (e) => {
    e.preventDefault();

    let what_is_the_right_i;
    for (let i = 0; i < guides.length; i++) {
      if (guides[i].id === guide.id) {
        what_is_the_right_i = i;
        guides[i].title = title;
        guides[i].text = text;
        guides[i].url = url;
      }
    }
    console.log(guides);
    // setGuides([...guides]);

    fetch(`${config.API_ENDPOINT}/${guide.id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${config.API_KEY}`

      },
      body: JSON.stringify(guides[what_is_the_right_i]),
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(note => {
        setGuides([...guides]);
      })
      .catch(error => {
        console.error({ error })
      })

    setIsOpen(false);
  };

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setTitle(guide.title);
    setText(guide.text);
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
          Title: <input
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
          <input
            type="text"
            value={url}
            className="guide-url"
            onChange={(e) => setURL(e.target.value)}
          />
          <button onClick={handleEdit}>Submit</button>
        </form>
        <button onClick={closeModal}>close</button>
      </Modal>
    </div>
  );
}
