import { Template } from 'meteor/templating';

import './workout.html';

import { Workouts } from '../../api/workouts.js';


Template.workout.events({
  'click .update'(event){

    event.preventDefault();

    const target = event.target;
    Workouts.update(this._id, {
          $set: { 
            number: target.parentElement.number.value,
            name: target.parentElement.name.value,
            sets: target.parentElement.sets.value,
            note: target.parentElement.note.value,
            updateAt: new  Date(),
          },
        });
  },
  'click .delete'(event){
    event.preventDefault();
    const confirm = window.confirm("Delete this task?");
    if (confirm) {
      Workouts.remove(this._id);
    };
  },
});