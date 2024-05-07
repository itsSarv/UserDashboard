
import './App.css';
import Create from './components/Create';
import Header from './components/Header';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Read from './components/Read';
import Update from './components/Update'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Create />} />
        <Route path="/all" element={<Read />} />
        <Route path="/:id" element={<Update />} />
      </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
