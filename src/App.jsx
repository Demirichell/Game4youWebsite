//import "./App.css";
import Pages from "./Components/Pages/Pages";
import {BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Pages></Pages>
      </BrowserRouter>
    </>
  );
}

export default App;
