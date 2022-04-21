import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Components/Home' 
import Login from './Components/Login' 
import RegisterModal from './Components/RegisterModal' 
import ErrorPage from './Components/ErrorPage' 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<RegisterModal />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
