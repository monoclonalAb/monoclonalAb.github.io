import React from 'react'
import styles from './projectLink.module.css'

export interface projectLinkProps {
  left?: string;
  title?: string;
  image?: string;
  alt?: string;
  duration?: string;

}

const projectLink = ({
  left,
  title,
  image,
  alt,
  duration,
}: projectLinkProps) => {
  return ( 
    <>
      <div 
        className={styles.container}
        style={{left}}>
        <img src={image} height="100%" width="100%" alt={alt}/>
        <div className={styles.coveringContainer}></div>
        <h1 className={styles.title}>
          {title} 
          <br/>
          <b className={styles.duration}>{duration}</b>
        </h1>
      </div>
    </> 
  );
};

export default projectLink;