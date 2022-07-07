export const depositMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "deposit",
      payload: amount,
    });
  };
};

export const withdrowMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "withdrow",
      payload: amount,
    });
  };
};

export const addUser = (user) => {
  return (dispatch) => {
    dispatch({
      type: "addUser",
      payload: user,
    });
  };
};

export const deleteUser = (user) => {
  return (dispatch) => {
    dispatch({
      type: "deleteUser",
      payload: user,
    });
  };
};
