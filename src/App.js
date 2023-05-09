import logo from './logo.svg';
import './App.css';
import colosseo from "./colosseo.jpg"

function App() {
  var name = "kais"
  var age = "30"
  return (
    <div className="App">
      <h1>my name is {name} and my age is {age}</h1>
      <img src={colosseo} style={{borderRadius: 20, width:500, heigth:500}}/>
      
    </div>
  );
}

export default App;
