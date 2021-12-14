import React from "react";
import classes from "./About.module.css";

function About() {
  return (
    <div className={classes.About}>
      <h2>How it works</h2>
      <div className={classes.StepSection}>
        <div className={classes.StepText}>One tap to find out nearby photographer</div>
        <div className={classes.StepImage}>Image</div>
      </div>
      <div className={classes.StepSection}>
        <div className={classes.StepImage}>Image</div>
        <div className={classes.StepText}>Choose your preference & Make Request</div>
      </div>
      <div className={classes.StepSection}>
        <div className={classes.StepText}>Let's create memory!</div>
        <div className={classes.StepImage}>Image</div>
      </div>
      <div className={classes.StepSection}>
        <div className={classes.StepText}>Done!</div>
        <div className={classes.StepImage}>Image</div>
      </div>
    </div>
  );
}

export default About;
