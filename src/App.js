import './App.css';
import Articles from './pages/Articles';
import Users from './pages/Users';
import Photos from './pages/Photos';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  return (
   <Routes>
    <Route path="/" element={<Nav/>}>
      <Route path="/articles" element={<Articles/>}/>
      <Route path="/users" element={<Users/>}/>
      <Route path="/photos" element={<Photos/>}/>
    </Route>
   </Routes>
  );
}

export default App;
