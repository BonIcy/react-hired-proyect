import React from 'react';

function Content(props) {
  return (
    <li className="content">
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <div className="buttons">
        <a className="btn" href={props.link1} target="_blank" rel="noopener noreferrer">Consumidores de frutas</a>
        <a className="btn" href={props.link2} target="_blank" rel="noopener noreferrer">Más información</a>
      </div>
    </li>
  );
}

export default Content;
