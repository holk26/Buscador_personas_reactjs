import { useEffect, useState } from "react";

const jsonData = [{
  key: "1",
  name: "Homero",
}, {
  key: "2",
  name: "Cabrera",
}, {
  key: "3",
  name: "Araque",
}, {
  key: "4",
  name: "Alejandra",
}, {
  key: "5",
  name: "Garzon",
}];

const App = () => {
  const [isLoading,   setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);

  }, []);
  const renderData = () => {

    return jsonData?.map((value, index) => (

      <div key={value.key}>
        <p>{value.name}</p>
      </div>
  ))

  }
  return (
    <div>
      {isLoading ? <h2>Loading...</h2> : renderData()}
    </div>

  );
 
}

export default App;
