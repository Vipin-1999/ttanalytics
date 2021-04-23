import Fileupload from "./utils/Fileupload";
import HeatMap_2 from "./heatmaps/Heatmap_2";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App container center">
        <Route exact path="/" component={Fileupload} />
        <Route path="/heatmap" component={HeatMap_2} />
      </div>
    </BrowserRouter>
  );
}

export default App;
