import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./views/Login";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/now-ui-dashboard.scss?v1.5.0";
import "assets/css/demo.css";

import AdminLayout from "layouts/Admin.js";

ReactDOM.render(
  <BrowserRouter basename="/">
    <Switch>
      {/* ////////////////////////////////////////////////////////////// */}
      <Route exact path="/" component={Login} />
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      {/* ////////////////////////////////////////////////////////////// */}
      {/* <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Redirect to="/admin/dashboard" /> */}
      {/* ////////////////////////////////////////////////////////////// */}
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
