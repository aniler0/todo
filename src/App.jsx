import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./pages/Main";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Route path="/" exact component={Home} />
        <Route path="/main" component={Main} />
      </div>
    </Router>
  );
}

export default App;
