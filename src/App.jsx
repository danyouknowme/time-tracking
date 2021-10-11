import "./app.scss";
import { MoreHorizOutlined } from "@material-ui/icons";
import data from "./data.json";

const App = () => {
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
            <span>Daily</span>  
            <span>Weekly</span>  
            <span>Monthly</span>  
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
                <h1>{item.timeframes.weekly.current}hrs</h1> 
                <span>Last week - {item.timeframes.weekly.previous}hrs</span> 
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App;
