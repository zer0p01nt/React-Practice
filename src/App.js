import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import ToDoList from "./routes/todos";
import Converter from "./routes/converter";
import Coin from "./routes/coin";

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Converter' element={<Converter />} />
        <Route path='/Coin-Tracker' element={<Coin />} />
        <Route path='/To-Do-List' element={<ToDoList />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
