import Main from "./Containers/Main";
import "./App.css";
import "./Styles/main.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //   <Main />
    // </div>
    <Router>
      <Main />
    </Router>
  );
}

export default App;
