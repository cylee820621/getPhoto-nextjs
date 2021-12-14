import { useState } from "react";

import classes from "./Navbar.module.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className={classes.Navbar}>
      <div className={classes.leftSide}>
        <div className={classes.logo}>
          <h1>Inspiration</h1>
        </div>
      </div>
      <div className={classes.rightSide}>
        <div className={classes.links}>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Feedback</a>
        </div>
        <button className={classes.btn}>BTN</button>
      </div>
    </nav>
  );
};

export default Navbar;
