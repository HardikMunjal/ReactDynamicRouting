import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import { myConfig } from './config/route';
import Components from './componentIndex';


export default function ParamsExample() {
  return (
    <Router>
      <div>
        <h2>Accounts</h2>

        <ul>
          <li>
            <Link to={'/'+myConfig.route1}>{myConfig.route1}</Link>
          </li>
          <li>
          <Link to={'/'+myConfig.route2}>{myConfig.route2}</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/:id" children={<Child />} />
          {/* <Route path="/:id" component={Netflix} />  */}
        </Switch>
      </div>
    </Router>
  );
}

function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();
  const ComponentToRender = Components[id];

  return (
    <div>
      <h3>ID: {id}</h3>     
      <ComponentToRender></ComponentToRender>
    </div>
  );
}
