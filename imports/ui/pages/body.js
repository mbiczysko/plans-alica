import { Template } from 'meteor/templating';
import { Workouts } from '../../api/workouts.js';

import './workout.js'
import './body.html';


Template.body.helpers({
  workouts() {
    // Show newest workouts at the top
    return Workouts.find({}, { sort: { createdAt: -1 } });
  },
});

Template.body.events({
  'submit .new-workout'(event) {
    // Prevent default browser form submit
    event.preventDefault();
 
    // Get value from form element
    const target = event.target;

    const number = target.number.value;
    const name = target.name.value;
    const sets = target.sets.value;
    const note = target.note.value;
    
    // Insert a task into the collection
    Workouts.insert({
      number,
      name,
      sets,
      note,
      createdAt: new Date(), // current time
    });
 
    // Clear form
    target.number.value = '';
    target.name.value = '';
    target.sets.value = '';
    target.note.value = '';
  },
});

Template.body.helpers({
  data: [
    { 
      number: '1',
      name: 'Scizzor Legs',
      sets: ['1min', '1min'
      ],
      note: 'lie on your back, keep arms at the side, legs above floor, cross them like scizzors. Keep lower back pressed against floor without arching it, if too hard, lift the legs higher above the floor',
      createdAt: new Date()

    },
    { 
      number: '2',
      name: 'Side Raises',
      sets: ['20 L/R', '20 L/R'
      ],
      note: "lie on your side, body straight, hand to your temple, other arm is placed in front of your chest, raise your body up sideways, squeezing obliques, lifting ribs off the floor, don't push with hand, lift your body up",
      createdAt: new Date()

    },
    { 
      number: '3',
      name: 'Ball Crunch + Hold The Plate In Straight Arms',
      sets: ['5kg/20', '5kg/20'
      ],
      note: "lie on the ball, hips lower than top, hold the plate in straight arms above your chest, crunch up&down",
      createdAt: new Date()

    },
  ],
});