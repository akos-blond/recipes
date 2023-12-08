import React, { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Routes } from "react-router-dom";
import Create from "./Create";
import LogIn from "./LogIn";
import Register from './Register';
import RecipeDetails from "./RecipeDetails";
import NotFound from "./NotFound";


function App() {

const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }


  return (
   
    <div className="login-panel">

    { currentForm === "login" ? <LogIn onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />}


  {/*  
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
          
            <Route exact path="/">
              <Home/>
            </Route>

            <Route path="/create">
              <Create/>
            </Route>

            <Route path="/login">
              <LogIn/>
            </Route>

            <Route path="/register">
              <Register />
            </Route>

            <Route path="/receptek/:id">
              <RecipeDetails/>
            </Route>

            <Route path="*">
              <NotFound />
            </Route>

          </Switch>
        </div>
   
      </div>
    </Router>*/}
    </div>
  );
}

export default App;
