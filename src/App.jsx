import React, { useState } from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import LogIn from "./LogIn";
import Register from './Register';
import RecipeDetails from "./RecipeDetails";
import NotFound from "./NotFound";
import ProtectedRoute from "./ProtectedRoute";


function App() {
const [currentUser, setCurrentUser] = useState('');




  return (
  <div className="login-panel">
    <BrowserRouter>
    <header>
      <Navbar/>
    </header>
      <main>
        <Routes>
          {/*PUBLIC*/ }
          <Route index element={<LogIn onLogin={(user) => {setCurrentUser(user)}}></LogIn>}/>
            <Route path="/register"element={<Register />}/>
            {/*PROTECTED ROUTES*/ }
            <Route path="/home" element={<Home/>}/>
            <Route path="/create" element={<Create/>}/>
            <Route path="/receptek/:id"element={<RecipeDetails/>}/>
            {/*CATH ALL */ }
            <Route path="*"element={<NotFound />}/>
          
          
        </Routes>
      </main>
    </BrowserRouter>
  </div>
  );
}

export default App;
