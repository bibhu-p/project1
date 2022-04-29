import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import ErrorPage from './pages/ErrorPage'
import PrivateRoute from './PrivateRoute'
import AdminDashBoard from './pages/AdminDashBoard'
import AdminMovies from './pages/AdminMovies';
import UserDashBoard from './pages/UserDashBoard'
import UserMovies from './pages/UserMovies'
import Layout from './Components/Layout'
import AllUsers from './pages/AllUsers'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Layout />}>
          <Route element={<PrivateRoute />}>
            <Route path="/admin/dashboard" element={<AdminDashBoard />} />
            <Route path="/admin/users" element={<AllUsers />} />
            <Route path="/admin/movies" element={<AdminMovies />} />
            <Route path="/user/dashboard" element={<UserDashBoard />}></Route>
            <Route path="/user/Movies" element={<UserMovies />}></Route>
          </Route>
        </Route>
        <Route path="*" element={<ErrorPage />}></Route>

      </Routes>
    </Router>
  );
}

export default App;
