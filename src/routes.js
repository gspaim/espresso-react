import React from "react";
import { isAuthenticated } from "./auth";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Posts from "./pages/Posts";

class PrivateRoute extends React.Component {
  state = {
    loading: true,
    isAuthenticated: false
  };
  componentDidMount() {
    isAuthenticated().then(isAuthenticated => {
      this.setState({
        loading: false,
        isAuthenticated
      });
    });
  }
  render() {
    const { component: Component, ...rest } = this.props;
    if (this.state.loading) {
      return (
        <div>
          <i className="fa fa-spinner fa-pulse" />
        </div>
      );
    } else {
      return (
        <Route
          {...rest}
          render={props => (
            <div>
              {!this.state.isAuthenticated && (
                <Redirect
                  to={{
                    pathname: "/",
                    state: { from: this.props.location }
                  }}
                />
              )}
              <Component {...this.props} />
            </div>
          )}
        />
      );
    }
  }
}

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <PrivateRoute path="/Home" component={Home} />
      <PrivateRoute path="/Posts" component={Posts} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
