import React, { Component } from 'react';
import classes from './App.module.css';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import { connect } from 'react-redux';

import * as actions from './store/actions/index';

import MainPageContainer from './Containers/MainPageContainer/MainPageContainer';
import EducationPage from './Containers/EducationPageContainer/EducationPageContainer';
import ExperiencePage from './Containers/ExperiencePageContainer/ExperiencePageContainer';
import HobbiesPage from './Containers/HobbiesPageContainer/HobbiesPageContainer';
import SkillsPage from './Containers/SkillsPageContainer/SkillsPageContainer';
import ProjectPage from './Containers/ProjectsPageContainer/ProjectsPageContainer';
import Portfolio from './Containers/Portfolio/PortfolioContainer';
import ContactPage from './Containers/Contact/ContactPageContainer';
import Auth from './Containers/Auth/Auth';
import Logout from './Containers/Auth/Logout/Logout';
import Footer from './UI/Footer/Footer';
import AdminView from './Containers/Admin/Admin';


class App extends Component {

  componentDidMount () {
    this.props.onTryAutoSignUp();
  }


  render() {

    let routes = (
        <Switch>
          <Route path="/admin-edit" component={AdminView} />
          <Route path="/curriculum-vitae" component={Portfolio} />
          <Route path="/yhteystiedot" component={ContactPage} />
          <Route path="/freetime" component={HobbiesPage} />
          <Route path="/education" component={EducationPage} />
          <Route path="/experience" component={ExperiencePage} />
          <Route path="/skills" component={SkillsPage} />
          <Route path="/projects" component={ProjectPage} />
          <Route path="/admin" component={Auth} />
          <Route path="/logout" component={Logout} />
          <Route path="/" exact component={MainPageContainer}/>
        </Switch>
    )


    return (
      <div className={classes.wrapper}>
            <div className={classes.pagewrapper}>
            <BrowserRouter>
              <Layout>
                  {routes} 
              </Layout> 
            </BrowserRouter>
          </div>
          <Footer/>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

 const mapDispatchToProps = dispatch => {
   return {
     onTryAutoSignUp: () => dispatch(actions.authCheckState())
   };
 };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
