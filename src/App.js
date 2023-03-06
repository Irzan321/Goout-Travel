import "./assets/index.css";
import Jumbotron from "Components/Jumbotron";
import Landing from "Landing";
import Services from "Components/Services";
import Packages from "Components/Packages";
import Destination from "Components/Destination";

function App() {
  return (
    <>
      <Landing />
      <Jumbotron />
      <Services />
      <Packages />
      <Destination />
    </>
  );
}

export default App;
