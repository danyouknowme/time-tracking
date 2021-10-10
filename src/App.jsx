import "./app.scss";
import { MoreHorizOutlined } from "@material-ui/icons";
import data from "./data.json";

const App = () => {
  return (
    <div className="app">
      <div className="wrapper">
        <div className="main">
          <div className="profile"></div>  
          <div className="period"></div>  
        </div> 
        <div className="sub-main">
          {data.map((item) => (
            <div className="activity">
              <div className="textContent">
                <div className="top">
                  <span>{item.title}</span>
                  <MoreHorizOutlined />
                </div>
                <h1>{item.timeframes.weekly.current}hrs</h1> 
                <span>Last week - {item.timeframes.weekly.previous}hrs</span> 
              </div>
            </div>
          ))}
          {/* <div className="activity"></div>
          <div className="activity"></div>
          <div className="activity"></div>
          <div className="activity"></div>
          <div className="activity"></div> */}
        </div>
      </div>
    </div>
  )
}

export default App;
