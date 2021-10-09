import Header from "./Components/Header"
import NearMe from "./Components/NearME"
import Recipi from "./Components/Recipi"
import NotFound from "./Components/NotFound"
import {BrowserRouter} from "react-router-dom"
import {Route,Switch} from "react-router-dom"

import './App.css';

const App = ()=>(
  <div className="app_container">
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/" component={Recipi}/>
        <Route exact path="/recipi" component={Recipi}/>
        <Route exact path="/resturant-finder" component={NearMe}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  </div>
)

export default App;
