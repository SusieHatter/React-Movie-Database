import React from "react";

//Components
import Header from "./components/Header";

//styles
import { GlobalStyle } from "./GlobalStyles";

function App() {
  return (
    <div className="App">
      <Header />
      Hello world!
      <GlobalStyle />
    </div>
  );
}

export default App;
