import React, { useEffect } from "react";
import AddWindowRoute from "../../feature/AddWindowRoute";
import Login from "../../feature/LogIn";
import City from "./City";
import ProfileAccordion from "./ProfileAccordion";
import Registration from "../../feature/Registration";
import Authorization from "../../feature/Authorization";
import SearchRoute from "../../feature/SearchRoute";
import ProfileUser from "../../feature/ProfileUser";
import EditProfileUser from "../../feature/EditProfileUser/index";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Directions from "../../feature/Directions";
import Direction from "../../feature/Directions/Direction";
import { db } from "../../firebase";

function App() {
  useEffect(() => {
    db.collection("users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/directions" component={Directions} />
        <Route path="/direction" component={Direction} />
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
