import './App.css';
import Tabs from './components/Tabs';

function App() {
  return (
    <div className="App">
    <Tabs strings={["content of tab 0", "content of tab 1", "content of tab 2"]}/>
    </div>
  );
}

export default App;
