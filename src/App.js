import "./App.css";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./components/Home";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/">
            <Header className="nav-header"/>
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
