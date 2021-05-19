import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./pages/Main";
import Signup from "./pages/Signup";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/main" component={Main} />
          <Route path="/signup" exact component={Signup} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
