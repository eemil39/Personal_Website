import React, { Component } from 'react';

import Aux from '../Auxiliary/Auxiliary';
import classes from './Layout.module.css';
import SideDrawer from '../../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../../Navigation/Toolbar/Toolbar';

class Layout extends Component {
    
    state = {
        showSidedrawer: false
    }

    sideDrawerCLosedHandler = () =>{
        this.setState({showSidedrawer: false});
    }

    sideDrawerToggle = () => {
        this.setState( ( prevState ) => {
            return {showSidedrawer: !prevState.showSidedrawer};
        });
    }
    render(){
        return(
            <Aux>
                <Toolbar
                drawerToggleClicked={this.sideDrawerToggle}/>
                <SideDrawer 
                open={this.state.showSidedrawer} 
                closed={this.sideDrawerCLosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children }
                </main>
            </Aux>
        );
    }
};

export default Layout;