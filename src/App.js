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

import Twitter from './Assets/png/png2/001-twitter.png';
import Facebook from './Assets/png/png2/002-facebook.png';
import Instagram from './Assets/png/png2/003-instagram.png';
import Linkedin from './Assets/png/png2/004-linkedin.png';


class App extends Component {

  componentDidMount () {
    this.props.onTryAutoSignUp();
  }


  render() {

    let routes = (
        <Switch>
          <Route path="/curriculum-vitae" component={Portfolio} />
          <Route path="/yhteistiedot" component={ContactPage} />
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
            <div className={classes.footer}>
              <div className={classes.inner_footer}>
                <div className={classes.logo_container}>
                  <h6>
                    Designed by 
                    Eemil Vähä
                  </h6>
                </div>

                <div className={classes.footer_third}>
                  <h2>Help</h2>
                  <a href="/terms">Terms &amp; conditions</a>
                  <a href="/privacypolicy">Privacy Policy</a>
                </div>

                <div className={classes.footer_third}>
                  <h2>More</h2>
                  <a href="/more">About</a>
                </div>

                <div className={classes.footer_fourth}>
                  <h2>Follow Me</h2>
                  <a href="https://www.facebook.com/eemil.vaha"><img src={Facebook} alt=""></img></a>
                  <a href="https://twitter.com/EemilVh"><img src={Twitter} alt=""></img></a>
                  <a href="https://www.instagram.com/eemilvahaa/"><img src={Instagram} alt=""></img></a>
                  <a href="https://www.linkedin.com/in/eemil-v%C3%A4h%C3%A4-3ba878196/"><img src={Linkedin} alt=""></img></a>
                  <span>Eemil Vähä &copy; 2021</span>
                </div>
              </div>
            </div>
      
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
