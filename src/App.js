import logo from './logo.svg';
import './App.css';
import Land from './component/Land';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import EditTemplate from './component/EditTemplate';
function App() {
  return (
    <div >
      <Router>
        <Routes >
            <Route path="/" element={ <Land/>}/>
            <Route path="/edit" element={ <EditTemplate/>}/>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
