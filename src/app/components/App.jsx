import Registration from "../../feature/Registration";
// import Authorization from "../../feature/Authorization";
import AddWindowRoute from "../../feature/AddWindowRoute";
import Routers from "../../feature/Routers";

function App() {
  return (
    <div className="App">
      <Registration />
      {/*<Authorization />*/}
      <AddWindowRoute />
      <Routers />
    </div>
  );
}

export default App;
