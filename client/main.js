// import '../imports/ui/pages/body.js';

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
 
import App from '../imports/ui/App.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
 
Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});
