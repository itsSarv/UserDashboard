
import './App.css';
import Create from './components/Create';
import Header from './components/Header';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Read from './components/Read';
import Updatebar from './components/Updatebar'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Create />} />
        <Route exact path="/all" element={<Read />} />
        <Route exact path="/update" element={<Updatebar />} />
      </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
