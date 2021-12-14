import React from "react";
import classes from "./About.module.css";
import Image from "next/image";

function About() {
  return (
    <div className={classes.About}>
      <h2>How it works</h2>
      <div className={classes.StepSection}>
        <div className={classes.StepTextSection}>
          <h4>One tap to find out nearby photographer</h4>
        </div>
        <div className={classes.StepImageSection}>
          <Image src="/step1.png" alt="usage" objectFit="contain" width="360" height="600" />
        </div>
      </div>
      <div className={classes.StepSection}>
        <div className={classes.StepImageSection}>
          <Image src="/step1.png" alt="usage" objectFit="contain" width="360" height="600" />
        </div>
        <div className={classes.StepTextSection}>
          <h4> Choose your preference & Make Request</h4>
        </div>
      </div>
      <div className={classes.StepSection}>
        <div className={classes.StepTextSection}>
          <h4>Let's create memory!</h4>
        </div>
        <div className={classes.StepImageSection}>
          <Image src="/step1.png" alt="usage" objectFit="contain" width="360" height="600" />
        </div>
      </div>
      <div className={classes.StepSection}>
        <div className={classes.StepTextSection}>
          <h4>Final</h4>
        </div>
        <Image src="/step1.png" alt="usage" objectFit="contain" width="360" height="600" />
      </div>
    </div>
  );
}

export default About;
