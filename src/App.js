import "./App.css";
import Header from "./Comp/Header";
import Home from "./Comp/Home";
import Detail from "./Comp/Detail";
import Login from "./Comp/Login"
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
        {/* <Header /> */}
        <Switch>
        <Route path="/login">
            <Login />
          </Route>

          <Route path="/details">
          <Header />
            <Detail />
          </Route>

          <Route exact path="/">
            <Header />
            <Home />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
