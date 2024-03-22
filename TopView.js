import classes from "./TopView.module.css";

function TopView() {
  return (
    <div className={classes.topView}>
      <div className={classes.headerView}>
        <div className={classes.create}>Create</div>
        <div className={classes.test}>Test & Optimise</div>
      </div>

      <div className={classes.topViewInner}>
        <div className={classes.t1}>Building algorithmic for XAU/USD</div>

        <div className={classes.rightsideTopContainer}>
          <div className={classes.Bt1}>Add SetUp</div>
          <div className={classes.Bt2}>Add Statement</div>
        </div>
      </div>
    </div>
  );
}

export default TopView;
