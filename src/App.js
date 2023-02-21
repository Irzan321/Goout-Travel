import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Navigation from "./component/Navigation";

function App(props) {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
