import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import PlacesList from "./Components/PlacesList";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Add from "./Components/Add";
import Edit from "./Components/Edit";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/add" component={Add}></Route>
          <Route exact path="/edit/" component={Edit}></Route>
          <Route exact path="/places" component={PlacesList}></Route>
        </Switch>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
