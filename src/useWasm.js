// src/useWasm.js
import { useEffect, useState } from 'react';
// import * as AsBind from "as-bind";
import loader from "@assemblyscript/loader"; 

export const useWasm = (url) => {
  const [state, setState] = useState(null);
  useEffect(() => { 
    const fetchWasm = async () => {
      const wasm = await fetch(url);
      const instance = await loader.instantiate(wasm, {});
      console.log(instance)
      setState(instance)
    };
    fetchWasm();
  }, []);
  return state;
}