
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/pages/Home';
import { NavBar } from './components/nav/NavBar';
import { AppViews } from './components/views/ApplicationViews';

function App() {
  return (

    <Routes>
    <Route path="*" element={
      <>
      <NavBar/>
      <AppViews/>
      </>
    } />
    
</Routes>


  );
}

export default App;
