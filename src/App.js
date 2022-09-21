import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //funcion para hacer reactiva la pagina

  const handlerEmailChange = ({target:{value}}) => setEmail(value);
  const handlerPasswordChange = ({target:{value}}) => setPassword(value);
  const handlerFormSubmit = (event) => {
    event.preventDefault();
    console.log(email+password);
    alert(email+password);
  }
 

  return (
    <div className="App">
      <form onSubmit={handlerFormSubmit}>
        <h2>Iniciar sesion</h2>
        <lavel>
          Correo
          <input type="email" value={email} onChange={handlerEmailChange}/>
        </lavel>
        <lavel>
          Password
          <input type="Password" value={password} onChange={handlerPasswordChange}/>
        </lavel>
        <button type="submit">ENTER</button>
      </form>

    </div>
  );
}

export default App;
