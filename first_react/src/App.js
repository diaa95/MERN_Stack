import logo from './logo.svg';
import './App.css';
import MyNewComponent from "./components/MyNewComponent";

function App() {
  return (
    <div className="App">
      <h1>Hello Dojo!</h1>
      <ul>
        <h2>Things i need to do:</h2>
        <li>Learn React</li>
        <li>Climb Mt. Everest</li>
        <li>Run a Marathon</li>
        <li>Feed the dogs</li>
      </ul>
        <MyNewComponent someText={"Hello World!"}/><br/>
        <MyNewComponent someText={"I am reusing this component.."}/>
    </div>
  );
}

export default App;
