import React, { FC } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './pages/Welcome';
import {Routes,Route} from "react-router-dom"
import PlanLayout from './Layouts/PlanLayout';
import PhoneConfirm from './pages/PhoneConfirm';
import CodeConfirm from './pages/CodeConfirm';
import AllowNotification from './pages/AllowNotification';
import AppLayout from './Layouts/AppLayout';
import Home from './pages/Home';

const App:FC=()=>{
  return (
    <>

    <PlanLayout>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/invite" element={<PhoneConfirm/>}/>
        <Route path="/code_confirm" element={<CodeConfirm/>}/>
        <Route path="/allow_notification" element={<AllowNotification/>}/>
      </Routes>
    </PlanLayout>
    
    <AppLayout>
      <Routes>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </AppLayout>
    </>
  );
}

export default App;
