import { useState } from "react";
import "./App.css";
import Login from "./components/Login";

function App() {
  return (
    <>
    <div className="h-screen bg-gray-300 flex items-center justify-center">
      <Login />
    </div>
    </>
  );
}

export default App;
