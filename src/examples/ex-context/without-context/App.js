import React, { useState } from "react";
import "./App.css";
import Homepage from "./examples/ex-context/without-context/Homepage";
import Layout from "./examples/ex-context/without-context/layout/Layout";
import themes from "./examples/ex-context/without-context/theme";

function App() {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () =>
    setTheme((oldTheme) =>
      oldTheme === themes.light ? themes.dark : themes.light
    );

  return (
    <Layout theme={theme} toggleTheme={toggleTheme}>
      <Homepage theme={theme} />
    </Layout>
  );
}

export default App;
