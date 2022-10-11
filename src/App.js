import logo from './logo.svg';
import './App.css';
import Sidebar from './sidebar';
import Topbar from './Topbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./css/sb-admin-2.css"
import Dashboard from './Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from './User';
import Createuser from './Createuser';
import View from './view';
import Edit from './edit';
import Profile from './Profile';


function App() {
  return (
   <BrowserRouter>
    <div id="wrapper">
      <Sidebar></Sidebar>
      <div id="content-wrapper" class="d-flex flex-column">
       <div id="content">
      <Topbar></Topbar>
     
      <Routes>
        <Route path="/Dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/User"  element={<User></User>}></Route>
        <Route path="/Createuser" element={<Createuser></Createuser>}> </Route>
        <Route path="/user/:id" element={<View></View>}> </Route>
        <Route path="/edit/:id" element={<Edit></Edit>}> </Route>
        <Route path="/profile/:id" element={<Profile></Profile>}> </Route>
      </Routes>
     
     
      
      </div>
      </div>
      </div>
  
   </BrowserRouter>
  );
}

export default App;

