// src/App
import React from "react";
import PasswordInput from "./components/PasswordInput";
import SubmitButton from "./components/SubmitButton";

function App() {
  return (
    <div>
      <h1>Password Entry</h1>
      <PasswordInput />
      <SubmitButton />
    </div>
  );
}

export default App;

