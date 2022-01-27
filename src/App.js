import React from 'react';
import './App.css';
import GetData from "./components/GetData";
import GetError from "./components/GetError";
import GetLoading from "./components/GetLoading";

function App() {
  return (
    <div>
      <GetData />
      <GetError />
      <GetLoading />
    </div>
  )
}
export default App;