import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Button from './components/Button';
import { frontendResources } from './redux/ResourceList';
import { loadResources } from './redux/categoryReducer';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadResources(frontendResources));
  }, [dispatch]);
  return (
    <>
     <Header />
     <Outlet />
    </>
  );
}

export default App;
