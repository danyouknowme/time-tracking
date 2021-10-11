import "./app.scss";
import { MoreHorizOutlined } from "@material-ui/icons";
import data from "./data.json";
import { useState } from "react";

const App = () => {

  const [period, setPeriod] = useState("weekly");

  const addPeriodClass = (time) => {
    return (period === time ) ? "selected-choice" : "non-selected-choice";
  }

  const checkClass = (title) => {
    switch (title) {
      case "Work":
        return "activity work";
      case "Play":
        return "activity play";
      case "Study":
        return "activity study";
      case "Exercise":
        return "activity exercise";
      case "Social":
        return "activity social";
      case "Self Care":
        return "activity selfCare";
      default:
        break;
    }
  }
  
  return (
    <div className="app">
      <div className="wrapper">
        <div className="main">
          <div className="profile">
            <div class="image"></div>
            <div>
              <span>Report for</span>
              <h1>Jeremy Robson</h1>
            </div>
          </div>  
          <div className="period">
            <span className={addPeriodClass("daily")} onClick={() => setPeriod("daily")}>Daily</span>  
            <span className={addPeriodClass("weekly")} onClick={() => setPeriod("weekly")}>Weekly</span>  
            <span className={addPeriodClass("monthly")} onClick={() => setPeriod("monthly")}>Monthly</span>  
          </div>  
        </div> 
        <div className="sub-main">
          {data.map((item) => (
            <div className={checkClass(item.title)}>
              <div className="textContent">
                <div className="top">
                  <span>{item.title}</span>
                  <MoreHorizOutlined style={{ cursor: "pointer" }}/>
                </div>
                <h1>{item.timeframes[period].current}hrs</h1> 
                <span>Last week - {item.timeframes[period].previous}hrs</span> 
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App;
