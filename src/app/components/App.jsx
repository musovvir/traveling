import Registration from "../../feature/Registration";
import Authorization from "../../feature/Authorization";
import AddWindowRoute from "../../feature/AddWindowRoute";
import Routers from "../../feature/Routers";
import SearchRoute from "../../feature/SearchRoute";
import ProfileUser from "../../feature/ProfileUser";
import EditProfileUser from "../../feature/EditProfileUser/index";

function App() {
  return (
    <div className="App">
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
