import { Provider } from "react-redux";
import store from "./views/editor/model/store";
import Editor from "./views/editor";
import LeftBar from "./views/leftBar";
import RightBar from "./views/rightBar";
import CanvasContainer from "./views/canvas";
function App() {
  return (
    <Provider store={store}>
      <div className="App" style={{ display: "flex" }}>
        <LeftBar />
        <CanvasContainer />
        <RightBar />
      </div>
    </Provider>
  );
}

export default App;
