import styles from "./style.module.css";
import { useNavigate } from "react-router";
import classNames from "classnames";
import eric_logo from "../../assets/eric.svg";
import zheng_logo from "../../assets/zheng.svg";
import block from "../../assets/block.svg"
import { relative } from "path";

export const HomePage = () => {
  const navigate = useNavigate();
  /*const handleButtonClick = () => {
    navigate('/example');
  }; */
  return (
    <div className={styles.background}>
      <title>Eric Zheng</title>

      <div className={styles.name}>
        {/* <img
          className={styles.eric}
          width="100%"
          src={eric_logo}
          alt="Eric"
          style={{
            transform: 'translate(-50%, 0%)',
            left: '60%',
            bottom: '52%',
          }}
        />
        <img
          className={styles.zheng}
          width="100%"
          src={zheng_logo}
          alt="Zheng"
          style={{
            transform: 'translate(-50%, 110%)',
            left: '60%',
            bottom: '52%',
          }}
        /> */ }
        <div className={classNames(styles.name_background, styles.svg_eric, styles.eric)}></div>
        <div className={classNames(styles.name_background, styles.svg_zheng, styles.zheng)}></div>
        <div>

        </div>
      </div>
      <svg viewBox="0 0 100 500" xmlns="http://www.w3.org/2000/svg">
        <rect width="5" height="300%" fill="#004c4c" style={{position: "absolute", transform: "translate(-8px, 0px) rotate(-20deg)"}}/>
        <rect width="5" height="300%" fill="#004c4c" style={{position: "absolute", transform: "translate(80px, 0px) rotate(-20deg)"}}/>
      </svg>
      
    </div>
  );
};
