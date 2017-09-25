// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomeScreen from './containers/HomeScreen/HomeScreen';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HomeScreen />, document.getElementById('root'));
registerServiceWorker();
