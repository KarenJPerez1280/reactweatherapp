import "./styles.css";
import Search from "./Search";
import Wind from "./Wind";
import Description from "./Description";
import Arrows from "./Arrows";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3 time">
          <p id="current-time" className="hour">
            10:30 AM
          </p>
        </div>
      </div>
      <div className="Search">
        <Search />
      </div>

      <div className="rowC">
        <div className="col-4">
          <Wind />
        </div>
        <Description />
        <div className="col-6">
          <Arrows />
        </div>
      </div>

      <Forecast />

    </div>

  );
}

