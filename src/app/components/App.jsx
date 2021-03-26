import React from "react";
import AddWindowRoute from "../../feature/AddWindowRoute";
import Routers from "../../feature/Routers";
import Login from "../../feature/LogIn";
import City from "../../feature/City";
import ProfileAccordion from "../../feature/ProfileAccordion";
import Registration from "../../feature/Registration";
import Authorization from "../../feature/Authorization";
import SearchRoute from "../../feature/SearchRoute";
import ProfileUser from "../../feature/ProfileUser";
import EditProfileUser from "../../feature/EditProfileUser/index";

function App() {
  return (
    <div className="App">
      <ProfileAccordion />
      <Login />
      <City />
      <Registration />
      <Authorization />
      <SearchRoute />
      <ProfileUser />
      <EditProfileUser />
      <AddWindowRoute />
      <Routers />
    </div>
  );
}

export default App;
