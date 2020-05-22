import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Landing from "./pages/Landing/Landing";
import Links from './pages/Links/Links'
import Events from "./pages/Events/Events";
import Map from "./Components/mapbox/mapbox";
import SearchableMap from "./Components/mapbox/searchableMap";
import GoogleMap from './Components/googleMap/googleMap'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/login" component={Login} />
      <Route path='/links' component={Links}/>
      <Route path="/signup" component={Register} />
      <Route path="/events" component={Events} />
      <Route path='/map' component={Map}/>
      <Route path='/search' component={SearchableMap} />
      <Route path='/googlemap' component={GoogleMap} />
    </Switch>
  );
}
