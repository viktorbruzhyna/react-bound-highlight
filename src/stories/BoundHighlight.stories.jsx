/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import BoundHighlight from '../components/BoundHighlight';

import './custom-styles.css';

export default {
  title: 'BoundHighlight',
  component: BoundHighlight,
};

export function TwoWayBound() {
  return (
    <div>
      <p>Move mouse on hover of the list item and observe the bound with the list items below:</p>
      <ul>
        <li><BoundHighlight id="one">One</BoundHighlight></li>
        <li><BoundHighlight id="two">Two</BoundHighlight></li>
        <li><BoundHighlight id="three">Three</BoundHighlight></li>
      </ul>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <p>Observe that connect works in the opposite way by default:</p>
      <ul>
        <li><BoundHighlight id="one">Bounded One</BoundHighlight></li>
        <li><BoundHighlight id="two">Bounded Two</BoundHighlight></li>
        <li><BoundHighlight id="three">Bounded Three</BoundHighlight></li>
      </ul>
    </div>
  );
}

export function HighlighAllInBound() {
  return (
    <div>
      <p>Move mouse on hover of the list item and observe the bound with the list items below:</p>
      <ul>
        <li><BoundHighlight currentHoverHighlightOn id="one">One</BoundHighlight></li>
        <li><BoundHighlight currentHoverHighlightOn id="two">Two</BoundHighlight></li>
        <li><BoundHighlight currentHoverHighlightOn id="three">Three</BoundHighlight></li>
      </ul>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <p>Observe that connect works in the opposite way by default:</p>
      <ul>
        <li><BoundHighlight currentHoverHighlightOn id="one">Bounded One</BoundHighlight></li>
        <li><BoundHighlight currentHoverHighlightOn id="two">Bounded Two</BoundHighlight></li>
        <li><BoundHighlight currentHoverHighlightOn id="three">Bounded Three</BoundHighlight></li>
      </ul>
    </div>
  );
}

export function OneWayBound() {
  return (
    <div>
      <p>Move mouse on hover of the list item and observe the bound with the list items below:</p>
      <ul>
        <li><BoundHighlight id="one">One</BoundHighlight></li>
        <li><BoundHighlight id="two">Two</BoundHighlight></li>
        <li><BoundHighlight id="three">Three</BoundHighlight></li>
      </ul>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <p>Observe that connect does not work in the opposite way:</p>
      <ul>
        <li><BoundHighlight oppositeHoverHighlightOff id="one">Bounded One</BoundHighlight></li>
        <li><BoundHighlight oppositeHoverHighlightOff id="two">Bounded Two</BoundHighlight></li>
        <li><BoundHighlight oppositeHoverHighlightOff id="three">Bounded Three</BoundHighlight></li>
      </ul>
    </div>
  );
}

export function MultipleInBound() {
  return (
    <div>
      <p>Move mouse on hover of the list item and observe the bound with the list items below:</p>
      <ul>
        <li><BoundHighlight id="one">One</BoundHighlight></li>
        <li><BoundHighlight id="two">Two</BoundHighlight></li>
        <li><BoundHighlight id="three">Three</BoundHighlight></li>
      </ul>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <ul>
        <li><BoundHighlight oppositeHoverHighlightOff id="one">Bounded One</BoundHighlight></li>
        <li><BoundHighlight oppositeHoverHighlightOff id="two">Bounded Two</BoundHighlight></li>
        <li><BoundHighlight oppositeHoverHighlightOff id="three">Bounded Three</BoundHighlight></li>
        <li><BoundHighlight oppositeHoverHighlightOff id="one">Bounded One</BoundHighlight></li>
        <li><BoundHighlight oppositeHoverHighlightOff id="two">Bounded Two</BoundHighlight></li>
        <li><BoundHighlight oppositeHoverHighlightOff id="three">Bounded Three</BoundHighlight></li>
      </ul>
    </div>
  );
}

export function CustomStyles() {
  return (
    <div>
      <p>Move mouse on hover of the list item and observe the bound with the list items below:</p>
      <ul>
        <li><BoundHighlight currentHoverHighlightOn className="CustomClassName" id="one">One</BoundHighlight></li>
        <li><BoundHighlight currentHoverHighlightOn className="CustomClassName" id="two">Two</BoundHighlight></li>
        <li><BoundHighlight currentHoverHighlightOn className="CustomClassName" id="three">Three</BoundHighlight></li>
      </ul>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <ul>
        <li><BoundHighlight currentHoverHighlightOn className="CustomClassName" id="one">Bounded One</BoundHighlight></li>
        <li><BoundHighlight currentHoverHighlightOn className="CustomClassName" id="two">Bounded Two</BoundHighlight></li>
        <li><BoundHighlight currentHoverHighlightOn className="CustomClassName" id="three">Bounded Three</BoundHighlight></li>
      </ul>
    </div>
  );
}

export function SideBySideEditor() {
  const [picture, setPicture] = useState('https://place-hold.it/250x100');
  const [title, setTitle] = useState('Lorem ipsum');
  const [subtitle, setSubtitle] = useState('Lorem ipsum dolor sit amet');
  const [description, setDescription] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
  return (
    <div className="CustomClassName--font">
      <h1>Side by Side editor</h1>
      <div className="CustomClassName--flex">
        <div>
          <form>
            <BoundHighlight className="CustomClassName--paddingBottom" id="picture" htmlTag="div">
              <div><label htmlFor="picture">Picture</label></div>
              <input
                style={{ width: 250 }}
                name="picture"
                id="picture"
                value={picture}
                onChange={(e) => { setPicture(e.target.value); }}
              />
            </BoundHighlight>
            <BoundHighlight className="CustomClassName--paddingBottom" id="title" htmlTag="div">
              <div><label htmlFor="title">Title</label></div>
              <input
                style={{ width: 250 }}
                name="title"
                id="title"
                value={title}
                onChange={(e) => { setTitle(e.target.value); }}
              />
            </BoundHighlight>
            <BoundHighlight className="CustomClassName--paddingBottom" id="subtitle" htmlTag="div">
              <div><label htmlFor="subtitle">Subtitle</label></div>
              <input
                style={{ width: 250 }}
                name="subtitle"
                id="subtitle"
                value={subtitle}
                onChange={(e) => { setSubtitle(e.target.value); }}
              />
            </BoundHighlight>
            <BoundHighlight className="CustomClassName--paddingBottom" id="description" htmlTag="div">
              <div><label htmlFor="description">Description</label></div>
              <textarea
                style={{ height: 150, width: 250 }}
                name="description"
                id="description"
                value={description}
                onChange={(e) => { setDescription(e.target.value); }}
              />
            </BoundHighlight>
          </form>
        </div>
        <div className="CustomClassName--verticalDivider" />
        <div className="CustomClassName--alignCenter">
          <div className="CustomClassName--card">
            <BoundHighlight oppositeHoverHighlightOff id="picture">
              <div>
                <img src={picture} alt="side by side" />
              </div>
            </BoundHighlight>
            <BoundHighlight oppositeHoverHighlightOff id="title">
              <div>
                <h2>{title}</h2>
              </div>
            </BoundHighlight>
            <BoundHighlight oppositeHoverHighlightOff id="subtitle">
              <div>
                <h6>{subtitle}</h6>
              </div>
            </BoundHighlight>
            <BoundHighlight oppositeHoverHighlightOff id="description">
              <div>{description}</div>
            </BoundHighlight>
          </div>
        </div>
      </div>
    </div>
  );
}
