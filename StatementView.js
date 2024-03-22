import classes from "./StatementView.module.css";

import { HiDotsVertical } from "react-icons/hi";

function StatementView() {
  return (
    <div className={classes.statmentView}>
      <div className={classes.statment1View}>
        <div className={classes.sTopView}>
          <div className={classes.stTitle}>Statement 1</div>

          <HiDotsVertical className={classes.menuIcon} />
        </div>

        <div className={classes.MainView}>
          <div className={classes.statmentDetails}>
            <div className={classes.whiteBlock}>If</div>

            <div className={classes.timeFrame}>
              <div className={classes.topText}>Timeframe</div>
              <div className={classes.titleFrame}>3 Hours</div>
              <HiDotsVertical className={classes.ArrowIcon} />
            </div>

            {/* <div className={classes.whiteBlock}>Less than</div> */}

            <div className={classes.timeFrame}>
              <div className={classes.topText}>Indicator</div>
              <div className={classes.titleFrame}>RSI</div>
              <HiDotsVertical className={classes.ArrowIcon} />

              <div className={classes.detailsFrame}>
                <div className={classes.details1}>Rsi lenagth : 14</div>
                <div className={classes.details2}>Rsi Source : Close</div>
                <div className={classes.details3}>MA Type : SMA</div>
                <div className={classes.details3}>MA length : 14</div>
              </div>
            </div>
          </div>

          <div className={classes.statmentDetails}>
            <div className={classes.whiteBlock}>Less Than</div>

            <div className={classes.timeFrame}>
              <div className={classes.topText}>Value</div>
              <div className={classes.titleFrame}>25</div>
              {/* <HiDotsVertical className={classes.ArrowIcon} /> */}
            </div>

            {/* <div className={classes.whiteBlock}>Less than</div> */}

            <div className={classes.timeFrame}>
              <div className={classes.topText}>Duration</div>
              <div className={classes.titleFrame}>4 Periods</div>
              <HiDotsVertical className={classes.ArrowIcon} />

              <div className={classes.detailsFrame}>
                <div className={classes.details1}>No Of Periods : 4</div>
                <div className={classes.details2}>From T -1</div>
                <div className={classes.details3}>Include : YES</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.statement2View}>
        <div className={classes.sTopView}>
          <div className={classes.stTitle}>Statement 2</div>

          <HiDotsVertical className={classes.menuIcon} />
        </div>

        <div className={classes.MainView}>
          <div className={classes.statmentDetails}>
            <div className={classes.whiteBlock}>Then</div>

            <div className={classes.timeFrame}>
              <div className={classes.topText}>Timeframe</div>
              <div className={classes.titleFrame}>3 Hours</div>
              <HiDotsVertical className={classes.ArrowIcon} />
            </div>

            {/* <div className={classes.whiteBlock}>Less than</div> */}

            <div className={classes.timeFrame}>
              <div className={classes.topText}>Indicator</div>
              <div className={classes.titleFrame}>RSI</div>
              <HiDotsVertical className={classes.ArrowIcon} />

              <div className={classes.detailsFrame}>
                <div className={classes.details1}>Rsi lenagth : 14</div>
                <div className={classes.details2}>Rsi Source : Close</div>
                <div className={classes.details3}>MA Type : SMA</div>
                <div className={classes.details3}>MA length : 14</div>
              </div>
            </div>
          </div>

          <div className={classes.statmentDetails}>
            <div className={classes.whiteBlock}>CrossingUp</div>

            {/* <div className={classes.timeFrame}>
              <div className={classes.topText}>Value</div>
              <div className={classes.titleFrame}>25</div>
              <HiDotsVertical className={classes.ArrowIcon} />
            </div> */}

            {/* <div className={classes.whiteBlock}>Less than</div> */}

            <div className={classes.timeFrame}>
              <div className={classes.topText}>Value</div>
              <div className={classes.titleFrame}>RSI MA</div>
              <HiDotsVertical className={classes.ArrowIcon} />

              <div className={classes.detailsFrame}>
                <div className={classes.details1}>No Of Periods : 4</div>
                <div className={classes.details2}>From T -1</div>
                <div className={classes.details3}>Include : YES</div>
              </div>
            </div>

            <div className={classes.statmentDetails}>
              <div className={classes.whiteBlock}>Long</div>

              <div className={classes.timeFrame}>
                <div className={classes.topText}>Stop Loss</div>
                <div className={classes.titleFrame}>From Low</div>
                <HiDotsVertical className={classes.ArrowIcon} />
              </div>

              {/* <div className={classes.whiteBlock}>Less than</div> */}

              <div className={classes.timeFrame}>
                <div className={classes.topText}>TakeProfit</div>
                <div className={classes.titleFrame}>From Entry</div>
                <HiDotsVertical className={classes.ArrowIcon} />
              </div>
            </div>

            <input
              className={classes.componenet}
              type="text"
              placeholder="Start Typing A componenet Name"
              name="inputfield"
            />

          </div>
        </div>
      </div>
    </div>
  );
}

export default StatementView;
