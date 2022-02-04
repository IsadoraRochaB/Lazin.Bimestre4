import { Switch, Route } from "react-router-dom";
import {
  Register,
  Login,
  HomeAjudar,
  HomeAdotar,
  HomeMain,
} from "pages";


const Routes = () => {
  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/adotar" exact component={HomeAdotar} />
      <Route path="/ajudar" exact component={HomeAjudar} />
      <Route path="/" exact component={HomeMain} />
    </Switch>
  );
};

export default Routes;
