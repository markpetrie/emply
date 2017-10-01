
import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

function Navigation({ location }) {

  return (
    <div style={{ display: 'flex', flexFlow: 'row', justifyContent: 'center'}}>
        <NavLink style={{ marginRight: '20px', paddingTop: '10px' }} to="/">Categories</NavLink>
        <NavLink style={{ marginRight: '20px', paddingTop: '10px' }} to="/expenses">Expenses</NavLink>
    </div>
  );
}

export default withRouter(Navigation);