import * as AC from "../constants/userContstants";
import axios from "axios";

const delayPromise = (time) => (data) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(data), time);
  });

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
      .then(delayPromise(1000))
      .then((response) => response.data)
      .then((data) => dispatch({ type: AC.UPDATE_BASIC, payload: data }))
      .catch((err) => console.log(err));
  };
}
export function getSkillInfo(id) {
  return function (dispatch) {
    return axios
      .get(`http://localhost:3000/skills?id=${id}`)
      .then(delayPromise(2000))
      .then((response) => response.data)
      .then((data) => dispatch({ type: AC.UPDATE_UESR_SKILL, payload: data }))
      .catch((err) => console.log(err));
  };
}
export function getAddressInfo(id) {
  return function (dispatch) {
    return axios
      .get(`http://localhost:3000/address?id=${id}`)
      .then(delayPromise(4000))
      .then((response) => response.data)
      .then((data) => dispatch({ type: AC.UPDATE_USER_ADDRESS, payload: data }))
      .catch((err) => console.log(err));
  };
}
export function getLocationInfo(id) {
  return function (dispatch) {
    return axios
      .get(`http://localhost:3000/location?id=${id}`)
      .then(delayPromise(3000))
      .then((response) => response.data)
      .then((data) =>
        dispatch({ type: AC.UPDATE_USER_LOCATION, payload: data })
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
