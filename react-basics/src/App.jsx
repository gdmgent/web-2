import React from 'react';

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
      </> :
      <h1>Gelieve aan te melden</h1>
  );
}

export default App;