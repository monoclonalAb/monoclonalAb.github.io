import React, {MouseEvent} from 'react';
import styles from "./style.module.css";
import { useNavigate } from "react-router";
import classNames from "classnames";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as svgs from "../../assets/svg/svg";
import * as imgs from "../../assets/img/img";
import ProjectLink from "../../components/projectLink"; 

export const HomePage = () => {
  const navigate = useNavigate();
  /*const handleButtonClick = () => {
    navigate('/example');
  }; */

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  
  const changeText = (event: MouseEvent<HTMLElement>) => {
    if (event) {
      let iterations = 0;
      const interval = setInterval(() => {
        const input = event.target as HTMLElement;
        input.innerText = input.innerText.split("")
        .map((letter, index) => {
          if (index < iterations) {
            const replaced = input.dataset.value as String
            return replaced[index]
          }
          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
        
        if(iterations >= 9) clearInterval(interval);
        iterations += 1/5;
      }, 30);
    }
  }

  return (
    <div style={{backgroundColor: "#E4F8F0"}} className={classNames(`cover-container-fluid`, styles.entireDiv)}>
      <title>Eric Zheng</title>
      
      
      <header className={classNames(styles.header, `cover-container-fluid`)}>
        {/* MAIN LOGO with lineTop, lineBottom, cursorAnimation and navigation bar */}
        <svg className={ styles.logo } xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" height="100%" width="100%" viewBox="0 0 365 156">
          <g className={ styles.Eric }>  
            <image href={ svgs.eric_logo }/>
          </g>
          <g className={ styles.Zheng }> 
            <image href={ svgs.zheng_logo } transform="translate(0, 83)"/>
          </g>
          
          { /* the cursor + highlighter animation */ }
          <g>
            <image href={ svgs.cursor } className = { styles.shift_cursor_to_the_right } />
            <image href={ svgs.cursorText } className = { styles.cursorTextRight } />
            <line className={ styles.textBlinking1 } x1="9%" y1="25%" x2="9%" y2="41%" />
            <line className={ styles.textBlinking2 } x1="41%" y1="25%" x2="41%" y2="41%"/>
            <rect className={ styles.highlighter }/>
          </g>
          { /* Line Animation */ }
          <g className={ styles.lineAnimationTop }>
            <line x1="0%" y1="5%" x2="100%" y2="5%"/>
            <line x1="0%" y1="7%" x2="100%" y2="7%"/>
          </g>
          
          <g className={ styles.lineAnimationBottom }>
            <line x1="0%" y1="43%" x2="100%" y2="43%"/>
            <line x1="0%" y1="45%" x2="100%" y2="45%"/>
          </g>

          { /* Navigation Bar */ }
        </svg>

        <div className={ styles.navItem }>  
            <a href = "#About">
              <h4 onMouseOver={changeText} data-value="ABOUT" font-size="5px">
                ABOUT
              </h4>
            </a>
            <a href = "#Projects">
              <h4 onMouseOver={changeText} data-value="PROJECTS" font-size="5px">
                PROJECTS
              </h4>
            </a>
            <a href = "#Contact">
              <h4 onMouseOver={changeText} data-value="CONTACT" font-size="5px">
                CONTACT
              </h4>
            </a>
            <a href="https://www.linkedin.com/in/eric-zheng-821a89256/" rel="noreferrer" target="_blank">
              <img src={svgs.linkedin} alt="linkedin" />
            </a>
            <a href="https://github.com/monoclonalAb" rel="noreferrer" target="_blank">
              <img src={svgs.github} alt="github" />
            </a>
        </div>
      </header>
      
      <div className={styles.placeholder}>
        <div className={styles.backgroundWave} style={{transform: "translate(0, 30.2vh)"}}>
          <svg viewBox="130 160 1500 800">
            <image className={ styles.wave } width="120%" height = "120%" href={ svgs.wave1 } />
            <image className={ styles.wave } width="120%" height = "120%" href={ svgs.wave2 } />
            <image className={ styles.wave } width="120%" height = "120%" href={ svgs.wave3 } />
            <image className={ styles.wave } width="120%" height = "120%" href={ svgs.wave4 } />
            <image className={ styles.wave } width="120%" height = "120%" href={ svgs.wave5 } />
          </svg>
        </div>
      </div>

      <div id="About" className = {classNames(`container-fluid`, styles.about)}> 
        <div className={ `container-xs col-sm-7 mt-3 pt-3 pb-3 mb-3 text-md-left` }>
          <img className={classNames(`mb-3 bi bi-paragraph`, styles.icons)} src={svgs.aboutIcon} alt="About Icon"/>
          <h3 className={classNames(`mb-3 lh-sm`, styles.subheading)}>About Me:</h3>
          <h4 className={styles.subheadingText}> Hi, my name is Eric Zheng.</h4>
          <br></br>
          <p className={classNames(`mb-5`, styles.text)}>
            I am a <b>first-year Computer Science student</b> at the <strong>University of Auckland</strong> who is interested in exploring opportunities in <b>Big Tech</b> or <b>fintech</b> in the future. <br/><br/> 
            Outside of university, you will most likely find me on the <b>4th floor of <a style={{color: "#0d503c"}} href="https://www.library.auckland.ac.nz/about-us/information-commons/kate-edger" rel="noreferrer" target="_blank">Kate Edger</a></b> or <b>any UOA study space</b> in general, working on side projects. Currently, I am working on <b>finishing this website</b>, before starting an <b>algorithmic trader using AlpacaAPI</b>. 
          </p>
        </div>
      </div>
      
      <div className = {styles.placeholder} style={{backgroundColor: "#D7F5E9"}}>
        <div className = {styles.upsideDownBackgroundWave} style={{transform: "rotate(0.5turn)"}}>
          <svg viewBox="130 160 1500 800" style={{position: "absolute"}}>
            <image className={ styles.wave } width="120%" height = "120%" href={ svgs.wave1 } />
            <image className={ styles.wave } width="120%" height = "120%" href={ svgs.wave2 } />
            <image className={ styles.wave } width="120%" height = "120%" href={ svgs.wave3 } />
            <image className={ styles.wave } width="120%" height = "120%" href={ svgs.wave4 } />
            <image className={ styles.wave } width="120%" height = "121%" href={ svgs.wave5 } />
          </svg>
        </div>
      </div>

      <div id="Projects" className = {classNames(`container-fluid`, styles.projects)}> 
        <div className={ `container-xs col-sm-7 mx-auto mt-3 pt-3 pb-3 mb-3 text-md-left` }>
          <img className={classNames(`mb-3 bi bi-paragraph`, styles.icons)} src={svgs.projectsIcon} alt="Projects Icon"/>
          <h3 className={classNames(`mb-3 lh-sm`, styles.subheading) }>Projects:</h3>
          <br/>
          <br/>
          <ProjectLink 
            left = "55%"
            image = {imgs.WDCCMembershipChecker} 
            title = "WDCC Membership Checker"
            duration = "March 2023 - "
          />
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <ProjectLink 
            left = "45%" 
            title = "TBC"
            duration = "May 2023 - "
          />
        </div>
      </div>
      
      <footer id="Contact" className={classNames(styles.footer)}>
        <div className={classNames(`col-12 col-md-7 text-end`, styles.footerText)}>
          <h3 className={classNames(`mt-5 mb-3 lh-sm`, styles.subheading) }>Contacts:</h3>
          <h4 className={styles.subheadingText}>Thanks for visiting!</h4>
          <p className={classNames(`mb-4`, styles.text)}>
            Send a connection request on Linkedin or flick me an email! <br/>
          </p>
          <h4 className={classNames(`mb-5`, styles.subheadingText)}><b>Let's talk.</b></h4>
        </div>

        <div className={classNames(`col-12 col-md-5`, styles.links)}>
          <h4><img src={svgs.contactsIcon} alt="Contacts Icon"/>Email:</h4>
          <a href="mailto:theericzheng@gmail.com"><h3>theericzheng@gmail.com</h3></a>
          <h4><img src={svgs.linkedinLight} alt="linkedin" />Linkedin:</h4>
          <a href="https://www.linkedin.com/in/eric-zheng-nz/" rel="noreferrer" target="_blank"><h3>linkedin.com/in/eric-zheng-nz/</h3> </a>
        </div>

        <div className={`col-12 mt-5 mt-md-0`}>
          <h5 className={classNames(styles.copyright, styles.text)}>© Copyright Eric Zheng 2023 | Design by <a href="https://github.com/monolonalAb">Eric Zheng</a> </h5>
        </div>
      </footer>
    </div>
  );
};
