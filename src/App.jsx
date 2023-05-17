import { useState } from 'react'
import car from './assets/car.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="carlogo">
        <img src={car} className="carimg" alt="car logo" />
      </div>
        <div className="info_name">
          <h2>Name : </h2>
          <h2>Darshik Chovatiya</h2>
        </div>
        <div className="info_name">
          <h2>Email : </h2>
          <h2>chovatiyadarshit13@gmail.com</h2>
        </div>
        <div className="info_name">
          <h2>Phone : </h2>
          <h2>9023101771</h2>
        </div>
        <div className="msg">
          <button>Message Me</button>
        </div>
    </>
  )
}

export default App