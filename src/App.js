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

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
          <Route path='addtestimony' element={<AddTestimony></AddTestimony>}></Route>
          <Route path='mytestimony' element={<MyTestimonies></MyTestimonies>}></Route>
          <Route path='alltestimonials' element={<AllTestimonials></AllTestimonials>}></Route>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
