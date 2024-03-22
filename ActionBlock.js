import classes from "./ActionBlock.module.css"

function ActionBlock() {
    return (

      <div className={classes.basicBlock}>
      <div className={classes.title}>Actions</div>

      <div className={classes.whiteBoxContainer}>
        <div className={classes.whiteBlock}>Long</div>
        <div className={classes.whiteBlock}>Short</div>
        <div className={classes.whiteBlock}>Wait</div>

      </div>

      {/* <div className={classes.whiteBoxContainer2}>
        <div className={classes.whiteBlock}>Duration</div>
        <div className={classes.whiteBlock}>When</div>

      </div> */}

    </div>

    )
}

export default ActionBlock;