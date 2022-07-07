import React from "react";
import { useDispatch } from "react-redux";
import classes from "./User.module.css";
import { deleteUser } from "../../State/action-creators";

const User = ({ user }) => {
  const dispatch = useDispatch();
  console.log(user);
  return (
    <div className={classes.container}>
      <span style={{ marginBottom: "20px" }}>{user.title}</span>
      <span>{user?.body}</span>
      <button
        style={{ marginTop: "20px" }}
        onClick={() => dispatch(deleteUser(user))}
      >
        Delete User
      </button>
    </div>
  );
};

export default User;
