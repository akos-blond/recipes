import React, { useState } from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
//az oldalak:
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Login from "./pages/Login";
import Register from './pages/Register';
import RecipeDetails from "./pages/RecipeDetails";
import NotFound from "./pages/NotFound";
import { useAuthContext } from "./hooks/useAuthContext";


function App() {
  const { user } = useAuthContext();

  return (
  <div className="login-panel">
    <BrowserRouter>
      <Routes>
        {/*PUBLIC*/ }
        <Route index element={<Login /*onLogin={(user) => {setCurrentUser(user)}}*/></Login>}/>
        <Route path="/register"element={!user ? <Register /> : <Home/>}/>

        {/*PROTECTED ROUTES*/ }
        <Route path="/home" element={!user ? <Login /> : <Home/>}/>
        <Route path="/create" element={!user ? <Login /> : <Create/>}/>
        <Route path="/receptek/:id"element={!user ? <Login /> : <RecipeDetails/>}/>

        {/*CATH ALL */ }
        <Route path="*"element={<NotFound />}/>
      </Routes>    
    </BrowserRouter>
  </div>
  );
}

export default App;
