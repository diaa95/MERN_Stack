import './App.css';
import Index from "./components/Index";
import {Router} from "@reach/router";
import Planets from "./components/Planets";
import People from "./components/People";
import Planet from "./components/Planet";

function App() {
  return (
    <div className="App">
      <Index/>
      <Router>
          <People path={"/people/:id"} exact/>
          <Planets path={"/planets/:id"} exact/>

      </Router>
    </div>
  );
}

export default App;
