import styles from "./style.module.css";
import { useNavigate } from "react-router";
import classNames from "classnames";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as svgs from "../../assets/svg";

export const HomePage = () => {
  const navigate = useNavigate();
  /*const handleButtonClick = () => {
    navigate('/example');
  }; */
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
            <path className={ styles.shift_cursor_to_the_right } d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103zM2.25 8.184l3.897 1.67a.5.5 0 0 1 .262.263l1.67 3.897L12.743 3.52 2.25 8.184z"/>
            <path className={ styles.cursorTextRight } d="M5 2a.5.5 0 0 1 .5-.5c.862 0 1.573.287 2.06.566.174.099.321.198.44.286.119-.088.266-.187.44-.286A4.165 4.165 0 0 1 10.5 1.5a.5.5 0 0 1 0 1c-.638 0-1.177.213-1.564.434a3.49 3.49 0 0 0-.436.294V7.5H9a.5.5 0 0 1 0 1h-.5v4.272c.1.08.248.187.436.294.387.221.926.434 1.564.434a.5.5 0 0 1 0 1 4.165 4.165 0 0 1-2.06-.566A4.561 4.561 0 0 1 8 13.65a4.561 4.561 0 0 1-.44.285 4.165 4.165 0 0 1-2.06.566.5.5 0 0 1 0-1c.638 0 1.177-.213 1.564-.434.188-.107.335-.214.436-.294V8.5H7a.5.5 0 0 1 0-1h.5V3.228a3.49 3.49 0 0 0-.436-.294A3.166 3.166 0 0 0 5.5 2.5.5.5 0 0 1 5 2zm3.352 1.355zm-.704 9.29z"/>
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
          <g className={ styles.navItem }>  
            
            
            <a href = "#About">
              <text font-size="5px" fill="#1aa179" x="242" y="62">
                About
              </text>
            </a>
            <a href = "#Projects">
              <text font-size="5px" fill="#1aa179" x="264" y="62">
                Projects
              </text>
            </a>
            <a href   = "#Contact">
              <text font-size="5px" fill="#1aa179" x="290" y="62">
                Contact
              </text>
            </a>
            <a href="https://www.linkedin.com/in/eric-zheng-821a89256/" rel="noreferrer" target="_blank">
              <rect x="314.5" y="56" height="8" width="9" opacity="0%"></rect>
              <path transform="translate(315.5, 56) scale(0.5)" fill="#1aa179" d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
            </a>
            <a href="https://github.com/monoclonalAb" rel="noreferrer" target="_blank">
              <rect x="327.5" y="56" height="8" width="9" opacity="0%"></rect>
              <path transform="translate(328.5, 56) scale(0.5)" fill="#13795b" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </a>
          </g>
        </svg>
      </header>
      
      <div className={styles.backgroundWave}>
        <svg viewBox="130 160 1500 800">
          <image className={ styles.wave } width="120%" height = "120%" href={ svgs.wave1 } />
          <image className={ styles.wave } width="120%" height = "120%" href={ svgs.wave2 } />
          <image className={ styles.wave } width="120%" height = "120%" href={ svgs.wave3 } />
          <image className={ styles.wave } width="120%" height = "120%" href={ svgs.wave4 } />
          <image className={ styles.wave } width="120%" height = "120%" href={ svgs.wave5 } />
        </svg>
      </div>

      <div id="About" className = {classNames(`container-fluid`, styles.about)}> 
        <div className={ `container-xs col-sm-7 mx-auto mt-3 pt-3 pb-3 mb-3 text-md-left` }>
          <svg className={ `mb-3 bi bi-paragraph` } xmlns="http://www.w3.org/2000/svg" width="75px" height="75px" fill="#06281e" viewBox="0 0 16 16">
            <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5v2z"/>
          </svg>
          <h3 className={ `display-5 mb-3 fw-semibold lh-sm` }>About Me:</h3>
          <h4>Hi, my name is Eric Zheng.</h4>
          <br></br>
          <p className={ `fw-normal mb-5 ` }>
            I am a <b>first-year Computer Science student</b> at the <strong>University of Auckland</strong> who is interested in exploring opportunities in <b>Big Tech</b> or <b>fintech</b> in the future. <br/><br/> 
            Outside of university, you will most likely find me on the <b>4th floor of <a style={{color: "#0d503c"}} href="https://www.library.auckland.ac.nz/about-us/information-commons/kate-edger" rel="noreferrer" target="_blank">Kate Edger</a></b> or <b>any UOA study space</b> in general, working on side projects. Currently, I am working on <b>finishing this website</b>, before starting an <b>algorithmic trader using AlpacaAPI</b>. 
          </p>
        </div>
      </div>
      
      <div className = {styles.placeholder}>
        <div className = {styles.upsideDownBackgroundWave}>
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
          <svg className={`mb-3 bi bi-paragraph`} xmlns="http://www.w3.org/2000/svg" width="75px" height="75px" fill="#06281e" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8.646 5.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 8 8.646 6.354a.5.5 0 0 1 0-.708zm-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 8l1.647-1.646a.5.5 0 0 0 0-.708z"/>
              <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
              <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
            </svg>
          <h3 className={ `display-5 mb-3 fw-semibold lh-sm` }>Projects:</h3>
          <h4>Hi, my name is Eric Zheng.</h4>
          <br></br>
          <p className={ `fw-normal mb-5 ` }>
            Under Construction!
          </p>
        </div>
      </div>
      
      <div id="Contacts" className = {classNames(`container-fluid`, styles.Projects)}> 
        <div className={ `container-xs col-sm-7 mx-auto mt-3 pt-3 pb-3 mb-3 text-md-center` }>
          <svg className={ `mb-3 bi bi-paragraph` } xmlns="http://www.w3.org/2000/svg" width="75px" height="75px" fill="#06281e" viewBox="0 0 16 16">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
          </svg>
          <h3 className={ `display-5 mb-3 fw-semibold lh-sm` }>Contacts:</h3>
          <h4>Thanks for visiting!</h4>
          <p className={ `fw-normal mb-5 ` }>
            Send a connection request on linkedin or flick me an email! <br/>
            also under contruction lol
          </p>
        </div>
      </div>
    </div>
  );
};
