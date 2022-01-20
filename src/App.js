import logo from './logo.svg';
import './App.css';
import { useWasm } from './useWasm';
// import loader from "@assemblyscript/loader"; 



function App() {
  const  instance  = useWasm('wasm-example.wasm');  
  return (
    <div className="App">
      {instance &&
        instance.exports.addString('hello', "wasm")
      }
    </div>
  );
}

export default App;
