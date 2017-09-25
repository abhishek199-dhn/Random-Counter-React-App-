// @flow

import * as React from 'react';
import ReactDOM from 'react-dom';
import RandomNumber from './RandomNumber';

it('RandomNumber renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RandomNumber min={1} max={5000} interval={2000} />, div);
});
