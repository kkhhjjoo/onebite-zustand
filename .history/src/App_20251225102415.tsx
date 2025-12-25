import { Route, Routes } from "react-router";
import "./App.css";
import indexPage from "@/pages/index-page";
import signInPage from "@/pages/sign-in-page";
import signUpPage from "@/pages/sign-up-page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<indexPage />} />
      <Route path="/sign-in" element={<div>SignIn</div>} />
      <Route path="/sign-up" element={<div>SignUp</div>} />
    </Routes>
  );
}

export default App;
