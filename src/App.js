import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [islogged, setIsLogged] = useState(false);

  //funcion para hacer reactiva la pagina

  const handlerLoginClick = () => {
    setIsLogged(true);

  }
 

  return (
    <div className="App">

        <h2>Iniciar sesion</h2>
        <lavel>
          Correo
          <input type="email" value={email} onChange={({target:{value}}) => setEmail(value)}/>
        </lavel>
        <br/><br/>
        <lavel>
          Password
          <input type="Password" value={password} onChange={({target:{value}}) => setPassword(value)}/>
        </lavel>
        <br/><br/>
        <button onClick={handlerLoginClick}>ENTER</button>
        {islogged && <h2>Logueado exitosamente</h2>}


    </div>
  );
}

export default App;
