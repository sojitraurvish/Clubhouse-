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
        <Route index path="/" element={<Welcome/>}/>
        <Route index path="/invite" element={<PhoneConfirm/>}/>
        <Route index path="/code_confirm" element={<CodeConfirm/>}/>
        <Route index path="/allow_notification" element={<AllowNotification/>}/>
      </Routes>
    </PlanLayout>

    <AppLayout>
      <Routes>
        <Route index path="/home" element={<Home/>}/>
      </Routes>
    </AppLayout>
    </>
  );
}

export default App;
