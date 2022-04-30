import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom'

function Chatline(props) {
  let text = props.text;

  const [element, setElement] = useState(text);

  function transform(text) {
    if (text.startsWith("/link")) {
      setElement(<Link to={text}>{text}</Link>);
    }
    else if (text.startsWith("/embed")) {
      const html = text.split(" ").slice(1).join(" ");
      setElement(<div dangerouslySetInnerHTML={{ __html: html }}></div>);
    }
    else if (text.startsWith("/age")) {
      const [, name] = text.split(" ");
      fetch("https://api.agify.io/?name=" + name)
        .then(res => res.json())
        .then(data => setElement(data.age));
    }
    else if (text.startsWith("/gender")) {
      const [, name] = text.split(" ");
      fetch("https://api.genderize.io/?name=" + name)
        .then(res => res.json())
        .then(data => setElement(data.gender));
    }
    else if (text.startsWith("/randomfact")) {
      fetch("https://uselessfacts.jsph.pl/random.json?language=en")
      .then(res => res.json())
      .then(data => setElement(data.text + " source:" + data.source));
      // ex10-01 here: Implement randomfact using fetch & promise
      // https://uselessfacts.jsph.pl/random.json?language=en

    }
    else if (text.startsWith("/nationalize")) {
      const [, name] = text.split(" ");
      fetch("https://api.nationalize.io/?name=" + name)
        .then(res => res.json())
        .then(data => setElement(data.country));
    }
    else if (text.startsWith("/randomdog")) {
      fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => setElement(data.message));
    }
  };

  useEffect(() => {
    transform(text);
  }, []);

  return (
    element
  )
}

export default Chatline;