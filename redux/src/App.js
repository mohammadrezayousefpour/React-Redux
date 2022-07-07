import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./State/index";
import { withdrowMoney, addUser, depositMoney } from "./State/action-creators";

import { useEffect } from "react";
import User from "./components/user/User";
function App() {
  const store = useSelector((state) => state);
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    if (store?.account != undefined && store?.account != 0) {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => {
          for (let index = 0; index < data.length; index++) {
            const element = data[index];
            if (element != undefined) {
              dispatch(addUser(element));
            }
          }
        })
        .catch((err) => console.log(err));
    }
  }, [store.account]);

  console.log(store);

  return (
    <div className="App">
      <h1>{users?.length}</h1>
      <button onClick={() => dispatch(depositMoney(100))}>Deposit</button>
      <button onClick={() => dispatch(withdrowMoney(200))}>withdraw</button>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {users.map((user) => (
          <User user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
