/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import BoundHighlight from '../components/BoundHighlight';

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
