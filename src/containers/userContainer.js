import { connect } from "react-redux";
import App from "../App";
import * as actions from "../actoins/userAction";

const mapStateToProps = (state) => {
  return {
    users: false,
    basic: false,
    skill: false,
    address: false,
    location: false,
    selectedUser: false,
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    // fetchBooks: (pageNo) => dispatch(actions.fetchBooks(pageNo)),
    // addToCart: (bookId) => dispatch(actions.AddToCart(bookId)),
    // removeItem: (bookId) => dispatch(actions.removeInCart(bookId)),
  };
};
const UserContainer = connect(mapStateToProps, mapDispathToProps)(App);
export default UserContainer;
