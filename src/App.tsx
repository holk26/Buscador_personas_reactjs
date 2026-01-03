import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState<string>('Homero')

  const handleButtonClick = () => {
    setName('Araque')
  }

  return (
    <div className="App">
      <h2>Hola {name}</h2>
      <button onClick={handleButtonClick}>Cambiar Nombre</button>
    </div>
  )
}

export default App
