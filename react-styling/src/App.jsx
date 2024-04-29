import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import customStyles from './myStyle.module.css';
import Test from './Test'
import Button from './Button';

function App() {
  return (
    <>
      <div className={customStyles.box}></div>
      <div>
        <button className="btn btn--danger">
          Dit is een knop
        </button>

        <Test />

        <Button variant="danger" label="Dit is mijn eerste knop" />

        <Button variant="warning" label="Dit is mijn tweede" />

        <Button variant="info">
          Dit is mijn label!
        </Button>

        <p>Dit is standaard hello</p>
      </div>
    </>
  )
}

export default App
