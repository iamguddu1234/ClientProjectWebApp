import classes from "./BehavioursBlock.module.css";

import { BsSearch } from "react-icons/bs";


function BehavioursBlock() {
  return (
    <div className={classes.basicBlock}>
    <div className={classes.topBar}>
      <div className={classes.title}>Behaviours</div>

      <div className={classes.createBtn}>Create</div>
    </div>


<div className={classes.searchContainer}>
    <BsSearch className={classes.searchIcon} />

    <input
      className={classes.editBox}
      type="text"
      placeholder="Search behaviours"
      name="inputfield"
    />
    </div>



    <div className={classes.whiteBoxContainer}>
      <div className={classes.whiteBlock}>Crossing Up</div>
      <div className={classes.whiteBlock}>Crossing Down</div>
      <div className={classes.whiteBlock}>Greater Than</div>
    </div>


    <div className={classes.whiteBoxContainer2}>
      <div className={classes.whiteBlock}>Less Than</div>
      <div className={classes.whiteBlock}>Inside Channel</div>
      <div className={classes.showallBtn}>Show All</div>

    </div>

 

  </div>
  );
}

export default BehavioursBlock;
