import './App.css';;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicRoute from './routes/PublicRoute';
import Login from './pages/public/Login';
import NotFound from './pages/public/NotFound';
import PrivateRoute from './routes/PrivateRoute';
import Dashboard from './pages/admin/Dashboard';
import Shopping from './pages/admin/Shopping';

function App() {
  return (
    <Router>
      <Routes>
        {/* public routes */}
        <Route element={<PublicRoute />}>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Route>
        {/* public routes */}
        <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/shopping' element={<Shopping />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
