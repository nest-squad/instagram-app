import {
  Switch,
  Route,
  Redirect,
  RouteComponentProps
} from "react-router-dom";
import { useUser } from "./context/User";
import { Home } from "./pages/Home";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";

const ProtectedRoute = ({ component: Component,  ...rest }:any) => {
  const {user} = useUser();
  console.log(user)
  const redirectHandle = (props:RouteComponentProps<{}>) => {
    if (user) {
      return <Component {...rest} {...props} />
    } else {
      return <Redirect to={
        {
          pathname: '/login',
          state: {
            from: props.location
          }
        }
      } />
    }
  }
  return <Route {...rest} render={redirectHandle} />
}

export const Routes = () => {
  return (
      <Switch>
        <ProtectedRoute exact path='/' component={Home} />
        <Route path="/login">
          <Signin />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
      </Switch>
  )
}