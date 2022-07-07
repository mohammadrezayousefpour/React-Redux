const UserReducer = (state = [], action) => {
  switch (action.type) {
    case "addUser":
      return [...state, action.payload];
    case "deleteUser":
      state = state.filter((user) => user.id != action.payload.id);
      return state;
    default:
      return state;
  }
};
export default UserReducer;
