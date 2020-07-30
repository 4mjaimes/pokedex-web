import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/Header';

const NavRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <>
        <Header {...props} />
        {Component && <Component {...props} />}
      </>
    )}
  />
);

export default NavRoute;
