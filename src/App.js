
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './views/home';
import Login from './views/login';
import userHome from './views/userhome';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route children path='/' element={<Home />} />
        <Route children path='/login' element={<Login />} />
        <Route children path='/userhome' element={<userHome />} />
        {/* this is where we define any 'page' of the app within*/}
      </Routes>
    </div>
  );
}

export default App;
