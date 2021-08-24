import "./App.css";
import Header from "./Comp/Header";
import Home from "./Comp/Home";
import Detail from "./Comp/Detail";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>

          <Route path="/details">
            <Detail />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
