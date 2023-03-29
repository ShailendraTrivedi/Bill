import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="flex p-5 mb-10 justify-around text-black gap-10 text-2xl bg-gray-300">
        <div className="">
          <Link to="/">RAILWAY</Link>
        </div>
        <div className="">
          <Link to="/flight">FILGHT</Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
