import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Railway from "./Railway";
import Header from "./Header";
import Flight from "./Flight";
const App = () => {
  return (
    <>
      <div className="w-screen h-screen">
        <BrowserRouter>
          <Navbar />
          <Header />
          <Routes>
            <Route path="/" element={<Railway />} />
            <Route path="/flight" element={<Flight />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
