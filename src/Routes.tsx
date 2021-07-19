import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { Bye } from "./pages/Bye";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <header>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/signin">SignIn</Link>
          </div>
          <div>
            <Link to="/signup">SignUp</Link>
          </div>
          <div>
            <Link to="/bye">Bye</Link>
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/bye" component={Bye} />
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
};
