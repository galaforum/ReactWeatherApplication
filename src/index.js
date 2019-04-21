import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import SimpleBottomNavigation from './tab';
import SimpleExpansionPanel from './expansionPanel';
import SimpleExpansionPanel2 from './expansionPanel2';
import * as serviceWorker from './serviceWorker';



ReactDOM.render(<SimpleBottomNavigation />, document.getElementById('root'));
//  ReactDOM.render(<SimpleExpansionPanel />, document.getElementById('root'));

// If you want your  app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
