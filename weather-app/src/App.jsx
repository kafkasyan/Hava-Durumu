import { useState, useEffect } from 'react'
import axios from "axios"
import WeatherApp from './components/weatherapp/weatherApp'

import './App.css'

function App() {
  return (
    <div className='App'>
      <WeatherApp/>
    </div>
  )
}

export default App
