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
