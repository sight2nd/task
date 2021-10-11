import { ConnectedRouter } from "connected-react-router";
import { Routes } from "./components/routers/routers";
import "./App.css";
import { history } from "./app/store";

function App() {
  return (
    <div>
      <ConnectedRouter history={history}>{Routes}</ConnectedRouter>
    </div>
  );
}

export default App;
