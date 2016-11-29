/**
 * A reducer takes in two things
 * 
 * 1: The action (info about what happened)
 * 2: A copy of the current state
 */

export default function comments(state = [], action) {
  console.log('Post will change');
  console.log(state, action);
  return state;
}