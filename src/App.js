import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Header from './Pages/Shared/Header';
import NotFound from './Pages/Shared/NotFound';
import Dashboard from './Pages/Dashboard/Dashboard';
import AddTestimony from './Pages/Dashboard/AddTestimony';
import MyTestimonies from './Pages/Dashboard/MyTestimonies';
import AllTestimonials from './Pages/Dashboard/AllTestimonials';
import RequireAuth from './Pages/Login/RequireAuth';
import { Toaster } from 'react-hot-toast';
import RequireAdmin from './Pages/Login/RequireAdmin';
import Privacy from './Pages/Shared/Privacy';
import Allprojects from './Pages/Allprojects/Allprojects';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<AddTestimony></AddTestimony>}></Route>
          <Route path='mytestimonies' element={<MyTestimonies></MyTestimonies>}></Route>
          <Route path='alltestimonials' element={<RequireAdmin><AllTestimonials></AllTestimonials></RequireAdmin>}></Route>
        </Route>
        <Route path='/allprojects' element={<Allprojects></Allprojects>}></Route>
        <Route path='/privacypolicy' element={<Privacy></Privacy>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            backgroundColor: "#25262A",
            color: "white",
            padding: "8px",
            borderRadius: "24px"
          }
        }}
      />
    </div>
  );
}

export default App;
