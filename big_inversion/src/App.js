import './App.css';
import PersonCard from "./PersonCard";

function App() {
  return (
    <div className="App">
        <PersonCard firstName={"Diaa"} lastName={"AbdAlDayem"} age={25} hairColor={"black"}/>
        <PersonCard firstName={"Tareq"} lastName={"Aljamal"} age={30} hairColor={"none"}/>
        <PersonCard firstName={"Kamal"} lastName={"Nouri"} age={28} hairColor={"black"}/>
        <PersonCard firstName={"AbdAlSalam"} lastName={"Qamheye"} age={27} hairColor={"blond"}/>    </div>
  );
}

export default App;
