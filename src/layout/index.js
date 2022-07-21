

import React from 'react';
import {Route} from 'react-router-dom';
import PropTypes from 'prop-types'

const Layout = ({component:Component, ...props}) => {
    return (
        <Route {...props} render={routerProps => (
            <Component {...routerProps} />
        )}/>
    )
}
Layout.propTypes = {
    component: PropTypes.func.isRequired
}

export default Layout;