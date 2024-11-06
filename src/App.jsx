import React from 'react';
import { useProvider } from './context/Context';

export default function App() {

  const {state} = useProvider()
  console.log(state);
  

  return <div>App</div>;
}
