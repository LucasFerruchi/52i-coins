import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import LogIn from "./pages/LogIn";
import RoutesApp from "./routes/RoutesApp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<RoutesApp />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
