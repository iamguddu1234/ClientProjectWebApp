import classes from "./BehavioursBlock.module.css";

function BehavioursBlock() {
  return (
    <div className={classes.basicBlock}>
      <div className={classes.title}>Behaviours Block</div>

      <input
        className={classes.editBox}
        type="text"
        placeholder="Search behaviours"
        name="inputfield"
      />

      <div className={classes.whiteBoxContainer}>
        <div className={classes.whiteBlock}>If</div>
        <div className={classes.whiteBlock}>Unless</div>
        <div className={classes.whiteBlock}>Then</div>
        <div className={classes.whiteBlock}>Timeframe</div>
      </div>

      <div className={classes.whiteBoxContainer2}>
        <div className={classes.whiteBlock}>Duration</div>
        <div className={classes.whiteBlock}>When</div>
        <div className={classes.showallBtn}>Show All</div>

      </div>
    </div>
  );
}

export default BehavioursBlock;
