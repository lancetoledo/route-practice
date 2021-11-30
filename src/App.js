import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import About from './Pages/About';
// import Home from './Pages/Home';
// import Profile from './Pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <About name = "Lance" age= {23}/>
      </div>
      <Routes> 
      {/* <Route path ="/" element={<Home/>} />
      <Route path ="/about" element={<About/>} />
      <Route path ="/profile" element={<Profile/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
