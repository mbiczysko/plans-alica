// import React from 'react';
// import RaisedButton from 'material-ui/RaisedButton';
// import React, { Component, PropTypes } from 'react';

// export default class MyAwesomeReactComponent extends Component {
//   render() {
//     return (
//       <li></li>
//     );
//   }
// }
import React, { Component, PropTypes } from 'react';

export default class Task extends Component {
  render() {
    return (
      <li>{this.props.task.text}</li>
    );
  }
}

Task.PropTypes = {
  task: PropTypes.object.isRequired,
}