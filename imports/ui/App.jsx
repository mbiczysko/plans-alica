import React, { Component } from 'react';
import Task from './Task.jsx';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent.jsx';

// export default class App extends Component {

//   getTasks() {
//     return [
//       { _id: 1, text: 'This is task 1' },
//       { _id: 2, text: 'This is task 2' },
//       { _id: 3, text: 'This is task 3' },
//     ];
//   }

//   renderTasks() {
//       return this.getTasks().map((task) => (
//         <Task key={task._id} task={task} />
//       ));
//     }


//   getWorkouts() {
//     // Show newest workouts at the top
//     return Workouts.find({}, { sort: { createdAt: -1 } });
//   };

//   renderWorkouts() {
//     return {
      
//     };
//   }

//   render() {
//     return (

//       <MuiThemeProvider muiTheme={getMuiTheme()}>
//       <div className="container">
//         <header>
//           <h1>Alica plans</h1>
//         </header>
      
//         <ul>
//           {this.renderTasks()}
//         </ul>
//       </div>
//         <MyAwesomeReactComponent />
//       </MuiThemeProvider>
//     );
//   }
// }
const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <MyAwesomeReactComponent />
  </MuiThemeProvider>
);
  