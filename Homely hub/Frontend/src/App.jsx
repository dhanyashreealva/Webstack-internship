import "./App.css";
import Main from "./components/home/Main";
import { BrowserRouter as Router ,Routes,Route,Navigate } from "react-router-dom";
import PropertyList from  "./components/home/PropertyList"

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route index element={<PropertyList/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
