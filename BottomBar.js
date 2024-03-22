import classes from "./BottomBar.module.css";

function BottomBar() {
  return (
    <div className={classes.bottomView}>
    <div className={classes.btn1}>Cancel</div>

    <div className={classes.leftsideContainer}>
      <div className={classes.btn2}>Save</div>
      <div className={classes.btn3}>Continue</div>
    </div>
  </div>
  );
}

export default BottomBar;
