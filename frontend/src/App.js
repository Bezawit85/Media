import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
import Header from './pages/Header'
// pages & components
import Sidebar from './pages/Sidebar';
import Login from './pages/Login'
import Signup from './pages/Signup'
import Feed from './pages/Feed'
import './App.css';

function App() {
  const { user } = useAuthContext();

  return (
      <BrowserRouter>
          <Routes>
            <Route 
              path="/" 
              element={user ? <>  <div className='app'>
            <Header /> <div className='app_body'> <Sidebar /> <Feed /> </div> </div>
                </> : <Navigate to="/login" />} 
            />
          
            <Route 
              path="/login" 
              element={!user ? <Login /> : <Navigate to="/" />} 
            />
            <Route 
              path="/signup" 
              element={!user ? <Signup /> : <Navigate to="/" />} 
            />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
