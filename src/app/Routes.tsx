import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import AppSpin from "./components/Suspense";

const Signin = lazy(() => import("./pages/Signin"));
const Signup = lazy(() => import("./pages/Signup"));
const Home = lazy(() => import("./pages/Home"));

const Routes = () => {
  return (
    <Suspense fallback={<AppSpin />}>
      <Switch>
        <Route exact path="/sign-in" component={Signin} />
        <Route exact path="/sign-up" component={Signup} />
        <PrivateRoute exact path="/" children={<Home />} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
