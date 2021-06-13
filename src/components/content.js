import React, { useEffect, useState } from "react";
import "./content.css";
import GridLoader from "react-spinners/GridLoader";
import * as S from "./userStyledComp";
import Basic from "./Basic";
import Skills from "./Skill";
import Location from "./Location";
import Address from "./Address";

const Content = (props) => {
  const getInitialActive = (users) => users && users.length > 0 && users[0].id;
  const [activeTab, setActiveTab] = useState(false);
  useEffect(() => {
    if (!props.users) {
      props.fetchUsers();
    }
    if (props.users?.length > 0 && !props.selectedUser) {
      const initID = getInitialActive(props.users);
      setActiveTab(initID);
      props.updateSelectedUser(initID);
      if (!props.basic) props.getBasic(initID);
      if (!props.skill) props.getSkill(initID);

      if (!props.location) props.getLocation(initID);
      if (!props.address) props.getAddress(initID);
    }
  }, []);

  const onSelectUser = (id) => {
    props.clearSelection();
    props.updateSelectedUser(id);
    setActiveTab(id);
    props.getBasic(id);
    props.getSkill(id);
    props.getLocation(id);
    props.getAddress(id);
  };
  return (
    <>
      {props.users ? (
        <div className="container">
          <div className="tabs">
            <ol className="tab-list">
              {props.users.map((u) => (
                <S.userTab
                  isActive={activeTab === u.id}
                  onClick={() => onSelectUser(u.id)}
                >
                  {u.name}
                </S.userTab>
              ))}
            </ol>
          </div>
          <div className="tabContents">
            <S.CSection>
              <Basic {...props} />
            </S.CSection>
            <S.CSection>
              <Skills {...props} />
            </S.CSection>
            <S.CSection>
              <Location {...props} />
            </S.CSection>
            <S.CSection>
              <Address {...props} />
            </S.CSection>
          </div>
        </div>
      ) : (
        <S.Loader>
          <S.Loading>
            <GridLoader color={"orange"} loading={props.loading} size={50} />
          </S.Loading>
        </S.Loader>
      )}
    </>
  );
};

export default Content;
