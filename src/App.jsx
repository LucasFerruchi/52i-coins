import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import LogIn from "./pages/LogIn";
import RoutesApp from "./routes/RoutesApp";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import { useState } from "react";

function App() {
  //Estado para LogIn
  const [login, setLogin] = useState(false);

  //Funcion para controlar el estado LogIn
  const cambiarLogIn = () => {
    setLogin(!login);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/*"
            element={
              <ProtectedRoutes login={login}>
                <RoutesApp cambiarLogIn={cambiarLogIn} />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/login"
            element={<LogIn cambiarLogIn={cambiarLogIn} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
