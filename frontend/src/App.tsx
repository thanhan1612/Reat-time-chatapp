
import Login from './pages/Login';
import Signup from './pages/Signup';
import OTPsend from './pages/forgotpassword/OTPsend';
import ResetPassword from './pages/forgotpassword/ResetPassword';
import './App.css'
import {BrowserRouter} from "react-router-dom";

import {Routes} from "react-router-dom";
import { Route } from 'react-router-dom';

const App: React.FC = () =>{
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/login" element = {<Login />}/>
        <Route path = "/signup" element = {<Signup />}/>
        <Route path = "/otpsend" element =  {<OTPsend />} />
        <Route path = "/resetpassword" element = {<ResetPassword />} />
      </Routes>
    </BrowserRouter>
 
  )
}

export default App;
