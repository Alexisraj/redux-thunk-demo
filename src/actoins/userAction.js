import * as AC from "../constants/userContstants";
import axios from "axios";

export function fetchUsers() {
  return function (dispatch) {
    return axios
      .get("http://localhost:3000/users")
      .then((response) => response.data)
      .then((data) => {
        console.log("return users", data);
        dispatch({
          type: AC.UPDATE_USERS,
          payload: data,
        });
      })
      .catch((err) => console.log(err));
  };
}
export function getBasicInfo(id) {
  return function (dispatch) {
    return axios
      .get(`http://localhost:3000/basic?id=${id}`)
      .then((response) => response.data)
      .then((data) => dispatch({ type: AC.UPDATE_BASIC, payload: data }))
      .catch((err) => console.log(err));
  };
}
export function getSkillInfo(id) {
  return function (dispatch) {
    return axios
      .get(`http://localhost:3000/skills?id=${id}`)
      .then((response) => response.data)
      .then((data) => dispatch({ type: AC.UPDATE_UESR_SKILL, payload: data }))
      .catch((err) => console.log(err));
  };
}
export function getAddressInfo(id) {
  return function (dispatch) {
    return axios
      .get(`http://localhost:3000/address?id=${id}`)
      .then((response) => response.data)
      .then((data) => dispatch({ type: AC.UPDATE_USER_ADDRESS, payload: data }))
      .catch((err) => console.log(err));
  };
}
export function getLocationInfo(id) {
  return function (dispatch) {
    return axios
      .get(`http://localhost:3000/localtion?id=${id}`)
      .then((response) => response.data)
      .then((data) =>
        setTimeout(
          dispatch({ type: AC.UPDATE_USER_LOCATION, payload: data }),
          4000
        )
      )
      .catch((err) => console.log(err));
  };
}
export function clearSelection() {
  return {
    type: AC.CLEAR_OLD_DATA,
  };
}
export function updateSelectedUser(id) {
  return { type: AC.SELECTED_USER, payload: id };
}
