import { HashRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Header from "./Header";


const Portal = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
       <Route exact path="/" element={<Dashboard />} />
       
      </Routes>
    </HashRouter>
  );
};

export default Portal;
