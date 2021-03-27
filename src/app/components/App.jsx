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
import { BrowserRouter, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/routers" component={Routers} />
        <Route path="/profileAccordion" component={ProfileAccordion} />
        <Route path="/login" component={Login} />
        <Route path="/city" component={City} />
        <Route path="/registration" component={Registration} />
        <Route path="/authorization" component={Authorization} />
        <Route path="/searchRoute" component={SearchRoute} />
        <Route path="/profileUser" component={ProfileUser} />
        <Route path="/editProfileUser" component={EditProfileUser} />
        <Route path="/addWindowRoute" component={AddWindowRoute} />
        <Redirect to="/routers" />
      </BrowserRouter>
    </div>
  );
}

export default App;
