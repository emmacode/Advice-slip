import React from "react";
//import logo from "./logo.svg";
import Advice from "./components/Advice";
import "./App.css";
//import { Provider } from "react-redux";
//import store from "./store";
function App() {
  return (
    // <Provider store={store}>
    // </Provider>
    <React.Fragment>
      <div className="App">
        <Advice />
      </div>
    </React.Fragment>
  );
}

export default App;
