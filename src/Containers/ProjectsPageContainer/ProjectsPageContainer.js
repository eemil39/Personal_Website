import React, { Component } from 'react';

import classes from './ProjectsPageContainer.module.css';
import Project1 from '../../Assets/Images/VScode.jpg';
import Project2 from '../../Assets/Images/VScode2.jpg';

class ProjectsPageContainer extends Component{
    
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    
    render() {
        return(
            <div>
                <h1>Projektit</h1>
                <div className={classes.BoxContainer}>
                    <div className={classes.InfoBox}>
                        <h2>Tämä sivusto</h2>
                        <p>
                            <span className={classes.firstLetter}>T</span>erve Lorem Ipsum has been the industry's standard dummy text ever 
                            since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It 
                            has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently 
                            with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum passages, and more recently 
                            with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum passages, and more recently 
                            with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum passages, and more recently 
                            with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum passages, and more recently 
                            with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                            <img src={Project1} alt=""/>

                    </div>
                </div>
                <div className={classes.separatorLine}></div>
                <div className={classes.BoxContainer}>
                    <div className={classes.InfoBox}>
                        <h2>Juomapeli Sivusto</h2>
                        <p>
                            <span className={classes.firstLetter}>T</span>erve Lorem Ipsum has been the industry's standard dummy text ever 
                            since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It 
                            has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently 
                            with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum passages, and more recently 
                            with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum passages, and more recently 
                            with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum passages, and more recently 
                            with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum passages, and more recently 
                            with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                            <img src={Project2} alt=""/>

                    </div>
                </div>
            </div>

        );
    }
}

export default ProjectsPageContainer;