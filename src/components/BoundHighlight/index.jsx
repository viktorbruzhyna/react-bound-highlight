/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import createStatesConnector from './createStatesConnector';

function BoundHighlight({
  id,
  children,
  currentHoverHighlightOn,
  oppositeHoverHighlightOff,
  className,
  defaultStyleOff,
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

  const shouldCurrentHighlight = currentHoverHighlightOn && highlight;
  const shouldBoundedtHighlight = boundHighlight && !highlight;
  const shouldOutline = !defaultStyleOff && (shouldCurrentHighlight || shouldBoundedtHighlight);
  const currentHoverClassName = shouldCurrentHighlight ? ` ${className}--currentHover` : '';
  const boundHoverClassName = shouldBoundedtHighlight ? ` ${className}--boundHover` : '';

  const classes = `${className}${currentHoverClassName}${boundHoverClassName}`;
  const restProps = shouldOutline ? { style: { outline: 'auto' } } : {};

  return (
    <Tag
      className={classes}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...restProps}
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
  defaultStyleOff: PropTypes.bool,
  /** custom className */
  className: PropTypes.string,
  /** wrapper HTML tag */
  htmlTag: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
};

BoundHighlight.defaultProps = {
  currentHoverHighlightOn: false,
  oppositeHoverHighlightOff: false,
  defaultStyleOff: false,
  className: 'BoundHighlight',
  htmlTag: 'span',
};

export default BoundHighlight;
