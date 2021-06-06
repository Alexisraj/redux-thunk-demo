import React, { useEffect } from "react";
import Header from "./components/header";
import Content from "./components/content";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/about";
import Contact from "./components/contact";

const App = (props) => {
  useEffect(() => {
    // if (!props.books) {
    //   props.fetchBooks(1);
    // }
  }, [props]);

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            component={() => <Content {...props} />}
          ></Route>
          <Route path="/about" exact component={About}></Route>
          <Route path="/contact" exact component={Contact}></Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
