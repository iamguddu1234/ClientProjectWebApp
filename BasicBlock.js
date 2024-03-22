import classes from "./BasicBlock.module.css"

function BasicBlock() {
    return (

        <div className={classes.basicBlock}>
        <div className={classes.title}>Basic Block</div>

        <div className={classes.whiteBoxContainer}>
          <div className={classes.whiteBlock}>If</div>
          <div className={classes.whiteBlock}>Unless</div>
          <div className={classes.whiteBlock}>Then</div>
          <div className={classes.whiteBlock}>Timeframe</div>

        </div>

        <div className={classes.whiteBoxContainer2}>
          <div className={classes.whiteBlock}>Duration</div>
          <div className={classes.whiteBlock}>When</div>

        </div>

      </div>

    )
}

export default BasicBlock;