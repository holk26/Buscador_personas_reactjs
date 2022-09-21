import { useState } from "react";

function App() {
  const [name, setName] = useState(" Homero");
  const [age] = useState("");
  const [, setSomething] = useState("hey!");

  const handlerHeyClick = (event) => {
    setName("Araque");

  }




  return (
    <div className="App">
      <h2>Hola {name}</h2>
      <p>{age}</p>
      <button onClick={handlerHeyClick}>Hey</button>
    </div>
  );
}

export default App;
