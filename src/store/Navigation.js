
import React, { Component } from 'react';
import { NavLink, Route, withRouter } from 'react-router-dom';
import qs from 'qs';

function Navigation({ location }) {
  const currentView = qs.parse(location.search.slice(1)).view || 'thumbnail';

  return (
    <div style={{ display: 'flex', flexFlow: 'row', justifyContent: 'center'}}>
      {/* <Route path="/stores" component={ViewSelector}/> */}
        <NavLink style={{ marginRight: '20px', paddingTop: '10px' }} to="/">Categories</NavLink>
        <NavLink style={{ marginRight: '20px', paddingTop: '10px' }} to="/expenses">Expenses</NavLink>
        {/* <li><NavLink to={`/stores?view=${currentView}`}>Stores</NavLink></li> */}
    </div>
  );
}

export default withRouter(Navigation);