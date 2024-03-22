import classes from "./ActionBlock.module.css"

function ActionBlock() {
    return (

        <div className={classes.basicBlock}>
        <div className={classes.title}>Action Block</div>

        <div className={classes.whiteBoxContainer}>
          <div className={classes.whiteBlock}>Long</div>
          <div className={classes.whiteBlock}>Short</div>
          <div className={classes.whiteBlock}>Wait</div>

        </div>

       

      </div>

    )
}

export default ActionBlock;