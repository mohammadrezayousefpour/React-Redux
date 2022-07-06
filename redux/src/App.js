import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./State/index";
function App() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const AC = bindActionCreators(actionCreators, dispatch);
  console.log(AC);
  console.log(store);
  return (
    <div className="App">
      <h1>{store.account}</h1>
      <button onClick={() => AC.depositMoney(100)}>Deposit</button>
      <button onClick={() => AC.withdrowMoney(200)}>withdraw</button>
    </div>
  );
}

export default App;
