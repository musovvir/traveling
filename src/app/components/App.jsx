import React from "react";
import AddWindowRoute from "../../feature/AddWindowRoute";
import Routers from "../../feature/Routers";
import Login from "../../feature/LogIn";
import City from "../../feature/City";
import ProfileAccordion from "../../feature/ProfileAccordion";

function App() {
  return (
    <div className="App">
      <ProfileAccordion />
      <Login />
      <City />
      <AddWindowRoute />
      <Routers />
    </div>
  );
}

export default App;
