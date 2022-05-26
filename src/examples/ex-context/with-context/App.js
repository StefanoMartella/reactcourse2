import React from "react";
import "./App.css";
import ThemeProvider from "./examples/ex-context/with-context/context/ThemeContext";
import Homepage from "./examples/ex-context/with-context/Homepage";
import Layout from "./examples/ex-context/with-context/Layout";

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Homepage />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
