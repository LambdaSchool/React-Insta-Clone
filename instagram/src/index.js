import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Moment from 'moment';

console.log(Moment().format("ddd, hA"));
ReactDOM.render(<App />, document.getElementById('root'));


