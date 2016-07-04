import React, { Component, PropTypes } from 'react';

export default class Workout extends Component {
  

  render() {
    return (
      <ul class="new-workout">
        <form>
          <input type="text" name="number"  value={{number}} placeholder="Type to add new tasks" />
          <input type="text" name="name" value="{{name}}" placeholder="Type to add new name" />
          <input type="text" name="sets" value="{{sets}}" placeholder="Type to add new sets" />
          <input type="text" name="note" value="{{note}}" placeholder="Type to add new note" />
          <button class="update">Update</button>
          <button class="delete">delete</button>
        </form>
      </ul>
    );
  }
}
