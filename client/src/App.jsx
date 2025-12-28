import React from 'react'
import Navbar from './components/Navbar';
import { Route ,Routes, useLocation} from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetails from './pages/MovieDetails';

import MyBookings from './pages/MyBookings';
import Favorite from './pages/Favorite';
import {Toaster} from 'react-hot-toast';
import Footer from './components/Footer';
import SeatLayout from './pages/SearLayout';
import Layout from './pages/admin/Layout';
import Dashboard from './pages/admin/Dashboard';
import AddShows from './pages/admin/AddShows';
import ListShows from './pages/admin/ListShows';
import ListBookings from './pages/admin/ListBookings';
const App = () => {
  
  const isAdminRoute = useLocation().pathname.startsWith('/admin');

  return (
    <>
      <Toaster/>
      {!isAdminRoute && <Navbar/> }
      
      <Routes>
          <Route path='/' element={<Home/>} > </Route>
          <Route path='/movies' element={<Movies/>} > </Route>
          <Route path='/movie/:id' element={<MovieDetails/>} > </Route>
          <Route path='/movie/:id/:date' element={<SeatLayout/>} > </Route>
          <Route path='/my-bookings' element={<MyBookings/>} > </Route>
          <Route path='/favorite' element={<Favorite/>} > </Route>
          <Route path='/admin/*' element={<Layout/>}>
              <Route index element={<Dashboard/>} /> 
              <Route path='add-shows' element={<AddShows/>} /> 
              <Route path='list-shows' element={<ListShows/>} /> 
              <Route path='list-bookings' element={<ListBookings/>} /> 
          </Route>
      </Routes>

      {!isAdminRoute && <Footer/> }
     
    </>
  )
}

export default App
