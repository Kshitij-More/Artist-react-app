import { act } from "@testing-library/react";

const intialStateUsers = [];

export default function userReducer(state = intialStateUsers, action) {
  switch (action.type) {
    case "user/addUser":
      return [...state, { id: state.length + 1, userName: action.payload }];
    case "user/editUsers":
      state.splice(action.payload.id-1,1,{id:action.payload.id-1,userName:action.payload.userName})
     return state;
    default:
      return state;
  }
}

export function addUser(userName) {
  return { type: "user/addUser", payload: userName };
}

export function editUsers(id, userName) {
  return { type: "user/editUsers", payload: { id: id, userName: userName } };
}
