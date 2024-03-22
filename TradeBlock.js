import classes from "./TradeBlock.module.css"

function TradeBlock() {
    return (

      <div className={classes.basicBlock}>
      <div className={classes.title}>Trade Management</div>

      <div className={classes.whiteBoxContainer}>
        <div className={classes.whiteBlock}>Manage</div>
        <div className={classes.whiteBlock}>Close</div>
        <div className={classes.whiteBlock}>Cancel</div>
        <div className={classes.whiteBlock}>No Trade</div>

      </div>

      <div className={classes.whiteBoxContainer2}>
        <div className={classes.whiteBlock}>Reverse</div>

      </div>

    </div>

    )
}

export default TradeBlock;