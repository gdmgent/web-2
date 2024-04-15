import React from 'react';
import List from './components/List';
import Course from './components/Course';

const name = 'Piet';
const isSignedIn = true;
const gender = 'male';

function Name() {
  return (
    <i>{name}</i>
  )
}

function App() {
  return (
    isSignedIn ?
      <>
        <h1>Hello <Name />!</h1>
        {gender === 'male' && <strong>Je bent een sterke man!</strong>}
        <List />

        <Course
          name="Web 2"
          numberOfStudents={7}
          teacher="Adriaan" />

        <Course name="Development 2" />
        <Course />
      </> :
      <h1>Gelieve aan te melden</h1>
  );
}

export default App;