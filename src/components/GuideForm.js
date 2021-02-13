import React, { useState, useContext } from "react";
import { GuidesContext } from "../Context";
import config from './config';


function GuideForm() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setURL] = useState("");
  const [guides, setGuides] = useContext(GuidesContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const dateadded = new Date();
    const newGuide = { title: title, text: text, author: author, url: url, dateadded };
    console.log(guides);

    fetch(`${config.API_ENDPOINT}/`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${config.API_KEY}`
      },
      body: JSON.stringify(newGuide),
    })
      .then((res) => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(note => {
        setGuides([...guides, newGuide]);
      })
      .catch(error => {
        console.error({ error })
      })
      setTitle("");
      setAuthor("");
      setText("");
      setURL("");
  };

  return (
    <div>
      <form className="guide-form" onSubmit={handleSubmit}>
      <input
          type="text"
          placeholder="Guide Title"
          value={title}
          className="guide-title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          type="text"
          placeholder="Write a guide"
          value={text}
          className="guide-text"
          onChange={(e) => setText(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="author"
          value={author}
          className="guide-author"
          onChange={(e) => setAuthor(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="URL"
          value={url}
          className="guide-url"
          onChange={(e) => setURL(e.target.value)}
        />
        <button>Add Guide</button>
      </form>
    </div>
  );
}

export default GuideForm;
