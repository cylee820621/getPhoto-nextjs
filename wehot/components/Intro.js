import classes from "./Intro.module.css";

function Intro() {
  return (
    <div className={classes.Intro}>
      <div className={classes.Content}>
        <h1>Capture your amazing life with quality photos never been so easy!</h1>
        <p>We bring you an innovative way to reach out to nearby photographers in realtime, or you can make schedule on it. ​ Just one tap, and  photographer is going for you.</p>
      </div>
      <div className={classes.Image}>Image</div>
    </div>
  );
}

export default Intro;
