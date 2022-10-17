import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { ProtectRoute } from './components/ProtectedRoute';
import { Register } from './components/Register';
import { AuthProvider } from './context/authContext';

function App() {
  return (
    <div className='bg-slate-300 h-screen text-white flex'>
      <AuthProvider >
        <Routes>
          <Route 
          path="/" 
          element={
            <ProtectRoute>
          <Home />
            </ProtectRoute>
          } ></Route>

          <Route path="/login" element={<Login />} ></Route>
          <Route path="/register" element={<Register />} ></Route>
        </Routes>
      </AuthProvider>
    </div>

  );
}

export default App;
