import './App.css';;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
// pages
import Login from './pages/public/Login';
import NotFound from './pages/public/NotFound';
import Dashboard from './pages/admin/Dashboard';
// shopping pages
import Shopping from './pages/admin/shopping/Shopping';
import Create from './pages/admin/shopping/Create';
import Details from './pages/admin/shopping/Details';

function App() {
  return (
    <Router>
      <Toaster richColors position="top-right" />
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
          <Route path='/shopping/create' element={<Create />} />
          <Route path='/shopping/details/:id' element={<Details />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
