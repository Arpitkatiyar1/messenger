import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./components/login";
import Register from "./components/Register";

function App(){
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
