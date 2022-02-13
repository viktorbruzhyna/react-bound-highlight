import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './index.css';

const createGlobalState = () => ({
  state: {},
  observers: [],
  addObserver(id, observer) {
    this.observers.push({ id, observer });
  },
  setState(id, value) {
    this.observers
      .filter(({ id: observerId }) => id === observerId)
      .forEach(({ observer }) => {
        observer(value);
      });
  },
});

function BoundHighlight({
  id,
  children,
  currentHighlightOn,
  oppositeHighlightOff,
  className,
  htmlTag: Tag,
}) {
  const [highlight, setHighlight] = useState(false);
  const [boundHighlight, setBoundHightlight] = useState(false);

  useEffect(() => {
    if (!window.boundhighlight) {
      window.boundhighlight = createGlobalState();
    }

    window.boundhighlight.addObserver(id, setBoundHightlight);

    return () => {
      window.boundhighlight = undefined;
    };
  }, []);

  const onMouseEnter = () => {
    setHighlight(true);
    if (!oppositeHighlightOff) {
      window.boundhighlight.setState(id, true);
    }
  };

  const onMouseLeave = () => {
    setHighlight(false);
    if (!oppositeHighlightOff) {
      window.boundhighlight.setState(id, false);
    }
  };

  const currentHoverClassNameString = currentHighlightOn && highlight ? ` ${className}--currentHover` : '';
  const boundHoverClassNameString = boundHighlight && !highlight ? ` ${className}--boundHover` : '';

  const classes = `${className}${currentHoverClassNameString}${boundHoverClassNameString}`;

  return (
    <Tag
      className={classes}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </Tag>
  );
}

BoundHighlight.propTypes = {
  /** unique group bound identifier */
  id: PropTypes.string.isRequired,
  currentHighlightOn: PropTypes.bool,
  oppositeHighlightOff: PropTypes.bool,
  /** custom className */
  className: PropTypes.string,
  /** wrapper HTML tag */
  htmlTag: PropTypes.string,
  children: PropTypes.oneOf([PropTypes.node, PropTypes.string]).isRequired,
};

BoundHighlight.defaultProps = {
  currentHighlightOn: false,
  oppositeHighlightOff: false,
  className: 'BoundHighlight',
  htmlTag: 'span',
};

export default BoundHighlight;
