import {
  Switch,
  Route
} from "react-router-dom";
import { Home } from "./pages/Home";



export const Routes = () => {

  return (
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
  )
}