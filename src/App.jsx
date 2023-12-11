import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
//az oldalak:
import Home from "./pages/protected pages/Home";
import Create from "./pages/protected pages/Create";
import Login from "./pages/free pages/Login";
import Register from "./pages/free pages/Register";
import RecipeDetails from "./pages/protected pages/RecipeDetails";
//hook-ok:
import NotFound from "./hooks/NotFound";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const onLogout = () => {
    setIsAuth(false)
  }

  return (
    <div className="login-panel">
      <BrowserRouter>
        <Routes>
          {/*PUBLIC*/}

          <Route
            exact
            path="/login"
            element={
              <Login
                onLogin={() => {
                  setIsAuth(true);
                }}
              ></Login>
            }
          />

          <Route exact path="/register" element={<Register />} />

          {/*PROTECTED ROUTES*/}
          <Route
            path="/"
            element={
              <ProtectedRoute isAuth={isAuth} onLogout={onLogout}> 
                <Home />
              </ProtectedRoute>
            }
          />

          <Route
            path="/create"
            element={
              <ProtectedRoute isAuth={isAuth} onLogout={onLogout}>
                <Create />
              </ProtectedRoute>
            }
          />

          <Route
            path="/receptek/:id"
            element={
              <ProtectedRoute isAuth={isAuth} onLogout={onLogout}>
                <RecipeDetails />
              </ProtectedRoute>
            }
          />

          {/*CATH ALL */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
