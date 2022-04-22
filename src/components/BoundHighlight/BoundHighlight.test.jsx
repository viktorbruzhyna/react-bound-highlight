/* global describe it expect afterEach */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import BoundHighlight from './index';

describe('BoundHighlight', () => {
  afterEach(() => {
    window.boundhighlight = undefined;
  });

  it('should render BoundHighlight component', () => {
    const { getByText } = render(<BoundHighlight id="test">Content</BoundHighlight>);
    expect(getByText('Content')).toBeInTheDocument();
  });

  it('should render create global variable to store the global store', () => {
    render((
      <div>
        <BoundHighlight id="test">Content</BoundHighlight>
        <BoundHighlight id="test">Bounded Content</BoundHighlight>
      </div>
    ));
    expect(window.boundhighlight.observers).toHaveLength(2);
  });
});
