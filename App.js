import logo from "./logo.svg";
import classes from "./App.module.css";
import "typeface-roboto";

import BasicBlock from "./BasicBlock";
import IndicatorsBlock from "./IndicatorsBlock";
import BehavioursBlock from "./BehavioursBlock";
import ActionBlock from "./ActionBlock";
import TradeBlock from "./TradeBlock";
import BottomBar from "./BottomBar";
import TopView from "./TopView";
import StatementView from "./StatementView";

function App() {
  return (
    <div className={classes.mainBox}>
      <div className={classes.parentBox}>
        <div className={classes.mainView}>
          <div className={classes.subViewContainer}>
            <TopView />

            <StatementView />
          </div>

          <BottomBar />
        </div>

        <div className={classes.componentsView}>
          <div className={classes.componentsTitle}>Components</div>

          <BasicBlock />
          <IndicatorsBlock />
          <BehavioursBlock />
          <ActionBlock />
          <TradeBlock />
        </div>
      </div>
    </div>
  );
}

export default App;
