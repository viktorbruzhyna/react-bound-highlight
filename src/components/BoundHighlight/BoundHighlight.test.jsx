/* eslint-disable react/jsx-props-no-spreading */
/* global describe it expect afterEach */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import BoundHighlight from './index';

describe('BoundHighlight', () => {
  afterEach(() => {
    window.boundhighlight = undefined;
  });

  describe('simple render', () => {
    it('should render BoundHighlight component', () => {
      const { getByText } = render(<BoundHighlight id="test">Content</BoundHighlight>);
      expect(getByText('Content')).toBeInTheDocument();
    });
  });

  describe('highlighting bounded content', () => {
    const setup = (props = {}, boundedProps = {}) => render((
      <div>
        <div>
          <BoundHighlight id="test" {...props}>Content</BoundHighlight>
        </div>
        <div>
          <BoundHighlight id="test" {...boundedProps}>Bounded Content</BoundHighlight>
        </div>
      </div>
    ));

    it('should highlight bounded content from both directions', () => {
      const { getByText } = setup();

      const boundHoverClass = 'BoundHighlight--boundHover';

      expect(getByText('Content')).not.toHaveClass(boundHoverClass);
      expect(getByText('Bounded Content')).not.toHaveClass(boundHoverClass);
      fireEvent.mouseOver(getByText('Content'));
      expect(getByText('Content')).not.toHaveClass(boundHoverClass);
      expect(getByText('Bounded Content')).toHaveClass(boundHoverClass);
      fireEvent.mouseLeave(getByText('Content'));
      expect(getByText('Content')).not.toHaveClass(boundHoverClass);
      expect(getByText('Bounded Content')).not.toHaveClass(boundHoverClass);
      fireEvent.mouseOver(getByText('Bounded Content'));
      expect(getByText('Content')).toHaveClass(boundHoverClass);
      expect(getByText('Bounded Content')).not.toHaveClass(boundHoverClass);
    });

    it('should highlight bounded content from both directions with custom classes', () => {
      const { getByText } = setup(
        { className: 'TestClassName' },
        { className: 'TestClassName' },
      );

      const boundHoverClass = 'TestClassName--boundHover';

      expect(getByText('Content')).not.toHaveClass(boundHoverClass);
      expect(getByText('Bounded Content')).not.toHaveClass(boundHoverClass);
      fireEvent.mouseOver(getByText('Content'));
      expect(getByText('Content')).not.toHaveClass(boundHoverClass);
      expect(getByText('Bounded Content')).toHaveClass(boundHoverClass);
      fireEvent.mouseLeave(getByText('Content'));
      expect(getByText('Content')).not.toHaveClass(boundHoverClass);
      expect(getByText('Bounded Content')).not.toHaveClass(boundHoverClass);
      fireEvent.mouseOver(getByText('Bounded Content'));
      expect(getByText('Content')).toHaveClass(boundHoverClass);
      expect(getByText('Bounded Content')).not.toHaveClass(boundHoverClass);
    });

    it('should highlight current and bounded content', () => {
      const { getByText } = setup(
        { currentHoverHighlightOn: true },
      );

      const boundHoverClass = 'BoundHighlight--boundHover';
      const currentHoverClass = 'BoundHighlight--currentHover';

      expect(getByText('Content')).not.toHaveClass(boundHoverClass);
      expect(getByText('Bounded Content')).not.toHaveClass(boundHoverClass);
      expect(getByText('Content')).not.toHaveClass(currentHoverClass);
      expect(getByText('Bounded Content')).not.toHaveClass(currentHoverClass);
      fireEvent.mouseOver(getByText('Content'));
      expect(getByText('Content')).not.toHaveClass(boundHoverClass);
      expect(getByText('Bounded Content')).toHaveClass(boundHoverClass);
      expect(getByText('Content')).toHaveClass(currentHoverClass);
      expect(getByText('Bounded Content')).not.toHaveClass(currentHoverClass);
    });

    it('should highlight bounded content in one direction only', () => {
      const { getByText } = setup(
        {},
        { oppositeHoverHighlightOff: true },
      );

      const boundHoverClass = 'BoundHighlight--boundHover';

      expect(getByText('Content')).not.toHaveClass(boundHoverClass);
      expect(getByText('Bounded Content')).not.toHaveClass(boundHoverClass);
      fireEvent.mouseOver(getByText('Content'));
      expect(getByText('Content')).not.toHaveClass(boundHoverClass);
      expect(getByText('Bounded Content')).toHaveClass(boundHoverClass);
      fireEvent.mouseLeave(getByText('Content'));
      expect(getByText('Content')).not.toHaveClass(boundHoverClass);
      expect(getByText('Bounded Content')).not.toHaveClass(boundHoverClass);
      fireEvent.mouseOver(getByText('Bounded Content'));
      expect(getByText('Content')).not.toHaveClass(boundHoverClass);
      expect(getByText('Bounded Content')).not.toHaveClass(boundHoverClass);
    });
  });

  describe('multiple bounded elements', () => {
    const setup = () => render((
      <div>
        <div>
          <BoundHighlight id="test">Content</BoundHighlight>
        </div>
        <div>
          <BoundHighlight id="test">Bounded Content</BoundHighlight>
        </div>
        <div>
          <BoundHighlight id="test">Another Bounded Content</BoundHighlight>
        </div>
        <div>
          <BoundHighlight id="test">One More Bounded Content</BoundHighlight>
        </div>
      </div>
    ));

    it('should highlight multiple bounded elements', () => {
      const { getByText } = setup();

      const boundHoverClass = 'BoundHighlight--boundHover';

      expect(getByText('Content')).not.toHaveClass(boundHoverClass);
      expect(getByText('Bounded Content')).not.toHaveClass(boundHoverClass);
      expect(getByText('Another Bounded Content')).not.toHaveClass(boundHoverClass);
      expect(getByText('One More Bounded Content')).not.toHaveClass(boundHoverClass);
      fireEvent.mouseOver(getByText('Content'));
      expect(getByText('Content')).not.toHaveClass(boundHoverClass);
      expect(getByText('Bounded Content')).toHaveClass(boundHoverClass);
      expect(getByText('Another Bounded Content')).toHaveClass(boundHoverClass);
      expect(getByText('One More Bounded Content')).toHaveClass(boundHoverClass);
      fireEvent.mouseLeave(getByText('Content'));
      fireEvent.mouseOver(getByText('Another Bounded Content'));
      expect(getByText('Content')).toHaveClass(boundHoverClass);
      expect(getByText('Bounded Content')).toHaveClass(boundHoverClass);
      expect(getByText('Another Bounded Content')).not.toHaveClass(boundHoverClass);
      expect(getByText('One More Bounded Content')).toHaveClass(boundHoverClass);
      fireEvent.mouseLeave(getByText('Another Bounded Content'));
      fireEvent.mouseOver(getByText('One More Bounded Content'));
      expect(getByText('Content')).toHaveClass(boundHoverClass);
      expect(getByText('Bounded Content')).toHaveClass(boundHoverClass);
      expect(getByText('Another Bounded Content')).toHaveClass(boundHoverClass);
      expect(getByText('One More Bounded Content')).not.toHaveClass(boundHoverClass);
    });
  });

  describe('global state', () => {
    it('should create global variable with 2 observers', () => {
      render((
        <div>
          <BoundHighlight id="test">Content</BoundHighlight>
          <BoundHighlight id="test">Bounded Content</BoundHighlight>
        </div>
      ));
      expect(window.boundhighlight.observers).toHaveLength(2);
    });

    it('should create global variable with 3 observers', () => {
      render((
        <div>
          <BoundHighlight id="test">Content</BoundHighlight>
          <BoundHighlight id="test">Bounded Content</BoundHighlight>
          <BoundHighlight id="test">One more Bounded Content</BoundHighlight>
        </div>
      ));
      expect(window.boundhighlight.observers).toHaveLength(3);
    });
  });
});
