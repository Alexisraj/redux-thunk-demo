import { connect } from "react-redux";
import App from "../App";
import * as actions from "../actoins/userAction";

const mapStateToProps = (state) => {
  return {
    users: state.userStore.users,
    basic: state.userStore.basic,
    skill: state.userStore.skill,
    address: state.userStore.address,
    location: state.userStore.location,
    contact: state.userStore.contact,
    selectedUser: state.userStore.selectedUser,
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(actions.fetchUsers()),
    getAddress: (id) => dispatch(actions.getAddressInfo(id)),
    getBasic: (id) => dispatch(actions.getBasicInfo(id)),
    getLocation: (id) => dispatch(actions.getLocationInfo(id)),
    getSkill: (id) => dispatch(actions.getSkillInfo(id)),
    getUserContact: (id) => dispatch(actions.getContactInfo(id)),
    updateSelectedUser: (id) => dispatch(actions.updateSelectedUser(id)),
    clearSelection: () => dispatch(actions.clearSelection()),
  };
};
const UserContainer = connect(mapStateToProps, mapDispathToProps)(App);
export default UserContainer;
