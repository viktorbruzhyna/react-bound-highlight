import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import createStatesConnector from './createStatesConnector';

function BoundHighlight({
  id,
  children,
  currentHoverHighlightOn,
  oppositeHoverHighlightOff,
  className,
  htmlTag: Tag,
}) {
  const [highlight, setHighlight] = useState(false);
  const [boundHighlight, setBoundHightlight] = useState(false);

  useEffect(() => {
    if (!window.boundhighlight) {
      window.boundhighlight = createStatesConnector();
    }

    window.boundhighlight.addObserver(id, setBoundHightlight);

    return () => {
      window.boundhighlight = undefined;
    };
  }, []);

  const onMouseEnter = () => {
    setHighlight(true);
    if (!oppositeHoverHighlightOff) {
      window.boundhighlight.setBoundedState(id, true);
    }
  };

  const onMouseLeave = () => {
    setHighlight(false);
    if (!oppositeHoverHighlightOff) {
      window.boundhighlight.setBoundedState(id, false);
    }
  };

  const currentHoverClassNameString = currentHoverHighlightOn && highlight ? ` ${className}--currentHover` : '';
  const boundHoverClassNameString = boundHighlight && !highlight ? ` ${className}--boundHover` : '';
  const shouldOutline = (currentHoverHighlightOn && highlight) || (boundHighlight && !highlight);

  const classes = `${className}${currentHoverClassNameString}${boundHoverClassNameString}`;

  return (
    <Tag
      style={{ outline: shouldOutline ? 'auto' : 'none' }}
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
  currentHoverHighlightOn: PropTypes.bool,
  oppositeHoverHighlightOff: PropTypes.bool,
  /** custom className */
  className: PropTypes.string,
  /** wrapper HTML tag */
  htmlTag: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
};

BoundHighlight.defaultProps = {
  currentHoverHighlightOn: false,
  oppositeHoverHighlightOff: false,
  className: 'BoundHighlight',
  htmlTag: 'span',
};

export default BoundHighlight;
