import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Navba from "./components/Navba";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/">
            <Navba />
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
