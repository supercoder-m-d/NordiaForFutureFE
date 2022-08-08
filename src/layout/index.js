

import React from 'react';
import {Route} from 'react-router-dom';
import PropTypes from 'prop-types'
import NavBar from '../components/navbar';

const Layout = ({component:Component, ...props}) => {

    

    return (
        <>
            <NavBar className='dark'/>
            <Route {...props} render={routerProps => (
                <Component {...routerProps} />
            )}/>
        </>
        
    )
}
Layout.propTypes = {
    component: PropTypes.func.isRequired
}
export default Layout;