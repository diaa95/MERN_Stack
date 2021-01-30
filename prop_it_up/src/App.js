import './App.css';
import MyComponent from "./components/MyComponent";

function App() {
  return (
    <div className="App">
    <MyComponent firstName={"Diaa"} lastName={"AbdAlDayem"} age={25} hairColor={"black"}/>
    <MyComponent firstName={"Tareq"} lastName={"Aljamal"} age={30} hairColor={"none"}/>
    <MyComponent firstName={"Kamal"} lastName={"Nouri"} age={28} hairColor={"black"}/>
    <MyComponent firstName={"AbdAlSalam"} lastName={"Qamheye"} age={27} hairColor={"blond"}/>
    </div>
  );
}

export default App;
