import './App.css';
import Navbar from './Navbar';
import {Routes, Route} from 'react-router-dom'
import Cv from './CV';
import Start from './Start';
import Portfolio from './Portfolio';
import Main from './Main';



function App() {
  return (
    <div className="App">
      <div className="body">
        <Navbar />
        <div className="main">
          <Routes>
          <Route path="/Main" element={<Main />}></Route>
            <Route path="/" element={<Start />}></Route>
            <Route path="/Portfolio" element={<Portfolio />}></Route>
            <Route path="/CV" element={<Cv />}></Route>
            <Route path="https://instagram.com/lundqvistkarin" target="_blank">Instagram</Route>

           
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
