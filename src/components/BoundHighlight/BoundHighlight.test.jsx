/* global describe it expect */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import BoundHighlight from '.';

describe('BoundHighlight', () => {
  it('should render BoundHighlight component', () => {
    const { getByText } = render(<BoundHighlight id="test">Content</BoundHighlight>);
    expect(getByText('Content')).toBeInTheDocument();
  });
});
