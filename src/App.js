import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home } from './components/Home';
import  SignInSide from './components/SignInSide';
import  {Login} from './components/Login';
import { ProtectRoute } from './components/ProtectedRoute';
import { Register } from './components/Register';
import SignUp from './components/SignUp';
import { AuthProvider } from './context/authContext';

function App() {
  return (
    <div className='bg-slate-300 h-screen text-white flex'>
      <AuthProvider >
        <Routes>
          
          {/*<Route path="/" element={<Home />} ></Route>*/}
          {<Route 
          path="/" 
          element={
            <ProtectRoute>
          <Home />
            </ProtectRoute>
          } ></Route>}

          {<Route path="/login" element={<Login />} ></Route>} {/* FireBase*/}
          
          {/*<Route path="/login" element={<SignInSide />} ></Route>*/}
          {/*<Route path="/register" element={<Register />} ></Route>*/}

          {<Route 
          path="/register" 
          element={<SignUp />} >
            </Route>} {/* FireBase*/}

        </Routes>
      </AuthProvider>
    </div>

  );
}

export default App;
