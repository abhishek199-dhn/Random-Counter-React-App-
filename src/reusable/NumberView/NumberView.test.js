// @flow

import * as React from 'react';
import ReactDOM from 'react-dom';
import NumberView from './NumberView';

it('NumberView renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <NumberView
            number={5000}
            animate={true}
        />,
        div
    );
});
