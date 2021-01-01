import "./App.css";
import Fileupload from "./Fileupload";
import { BrowserRouter, Route } from "react-router-dom";
import ImageCapture from "./ImageCapture";

function App() {
  return (
    <BrowserRouter>
      <div className="App container center">
        <Route exact path="/" component={Fileupload} />
        <Route path="/heatmap" component={ImageCapture} />
      </div>
    </BrowserRouter>
  );
}

export default App;
