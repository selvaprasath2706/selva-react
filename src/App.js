import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PrivateRoute from "./PrivateRoute"
export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <PrivateRoute exact path="/home" component={Home}></PrivateRoute>
      </Switch>
    </Router>
  );
}
