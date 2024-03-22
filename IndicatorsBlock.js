import classes from "./IndicatorsBlock.module.css";

import { BsSearch } from "react-icons/bs";


function IndicatorsBlock() {
  return (
    <div className={classes.basicBlock}>
      <div className={classes.topBar}>
        <div className={classes.title}>Indicators</div>

        <div className={classes.createBtn}>Create</div>
      </div>


<div className={classes.searchContainer}>
      <BsSearch className={classes.searchIcon} />

      <input
        className={classes.editBox}
        type="text"
        placeholder="Search Indicators"
        name="inputfield"
      />
      </div>



      <div className={classes.whiteBoxContainer}>
        <div className={classes.whiteBlock}>RSI</div>
        <div className={classes.whiteBlock}>RSI (MA)</div>
        <div className={classes.whiteBlock}>MACD</div>
        <div className={classes.whiteBlock}>Bollienger</div>
      </div>


      <div className={classes.whiteBoxContainer2}>
        <div className={classes.whiteBlock}>Price</div>
        <div className={classes.whiteBlock}>Stochastic_Fast</div>
        <div className={classes.showallBtn}>Show All</div>

      </div>

   

    </div>
  );
}

export default IndicatorsBlock;
