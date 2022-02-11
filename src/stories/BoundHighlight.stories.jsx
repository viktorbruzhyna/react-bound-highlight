/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import BoundHighlight from '../components/BoundHighlight';

const stories = storiesOf('App Test', module);

stories.add('App', () => (
  <div>
    <BoundHighlight id="test1">This component is bounded to</BoundHighlight>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <BoundHighlight id="test1">this. So you have move mouse on it to see reflection</BoundHighlight>
  </div>
));
