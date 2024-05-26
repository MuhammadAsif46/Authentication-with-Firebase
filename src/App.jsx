import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/signup" element={<SignupPage/>}/>
      <Route path="/profile" element={<ProfilePage/>}/>
      <Route path="/update-password" element={<UpdatePasswordPage/>}/>
    </Routes>
    </>
  );
}

export default App;
