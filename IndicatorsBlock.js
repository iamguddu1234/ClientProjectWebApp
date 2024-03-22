import classes from "./IndicatorsBlock.module.css";

function IndicatorsBlock() {
  return (
    <div className={classes.basicBlock}>
      <div className={classes.topBar}>
        <div className={classes.title}>Indicators Block</div>

        <div className={classes.createBtn}>Create</div>
      </div>

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

export default IndicatorsBlock;
