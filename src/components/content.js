import React, { useEffect } from "react";
import "./content.css";
import GridLoader from "react-spinners/GridLoader";

const Content = (props) => {
  useEffect(() => {
    if (!props.users) {
      props.fetchUsers();
    }
  }, []);
  return (
    <>
      <div>yrdy</div>
    </>
  );
};

export default Content;
