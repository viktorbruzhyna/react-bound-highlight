import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const createGlobalState = () => ({
  state: {},
  observers: [],
  addObserver(observer) {
    this.observers.push(observer);
  },
  setState(key, value) {
    this.observers.forEach((observer) => {
      observer(key, value);
    });
    this.state[key] = value;
  },
});

// purpose: highlight onother element one current element is on hover/focus
// @todo:
// 1: highlight both ✅
// 2: highlight linked element on hover ✅
// 3: highlight linked element on focus
// 4: one direction highlight ✅
// 5: custom className for wrappers ✅

function BoundHiglight({
  id, children, shouldCurrentHighlight, shouldBoundHighlight, className,
}) {
  const [highlight, setHighlight] = useState(false);
  const [boundHighlight, setBoundHightlight] = useState(false);

  useEffect(() => {
    if (!window.farlight) {
      window.farlight = createGlobalState();
    }
    window.farlight.addObserver((key, value) => {
      if (id === key) {
        setBoundHightlight(value);
      }
    });
  }, []);

  const shouldHighlight = (highlight && shouldCurrentHighlight)
    || (boundHighlight && shouldBoundHighlight);

  const onMouseEnter = () => {
    setHighlight(true);
    window.farlight.setState(id, true);
  };

  const onMouseLeave = () => {
    setHighlight(false);
    window.farlight.setState(id, false);
  };

  return (
    <div
      className={`BoundHiglight${className && ` ${className}`}`}
      style={{ outline: shouldHighlight && 'auto' }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
}

BoundHiglight.propTypes = {
  id: PropTypes.string.isRequired,
  shouldCurrentHighlight: PropTypes.bool,
  shouldBoundHighlight: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.oneOf([PropTypes.node, PropTypes.string]).isRequired,
};

BoundHiglight.defaultProps = {
  shouldCurrentHighlight: false,
  shouldBoundHighlight: true,
  className: '',
};

export default BoundHiglight;
