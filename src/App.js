
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './views/home';
import Login from './views/login';
import UserHome from './views/userhome';
import RegForm from './views/reg';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route children path='/' element={<Home />} />
        <Route children path='/login' element={<Login />} />
        <Route children path='/userhome' element={<UserHome />} />
        <Route children path='/reg' element={<RegForm />} />
        
        {/* this is where we define any 'page' of the app within*/}
      </Routes>
    </div>
  );
}

export default App;
