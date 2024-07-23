import "./App.css";
import { Routes, Route } from "react-router-dom";
import Cards from "./components/Cards/index.jsx";
import Detail from "./components/Detail/index.jsx";
import LandingPage from "./components/LandingPage/index.jsx";
import FormPage from "./components/Form/formPage.jsx";



function App() {

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home"element={<Cards />}/>
      <Route path="/detail/:detailId" element={<Detail />} />
      <Route path="/form" element={<FormPage />} />


    </Routes>
  );
}

export default App;
