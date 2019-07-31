import React from "react";

import "./App.css";
import Advice from "./components/Advice";

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
