import { useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import * as S from "./userStyledComp";

const Basic = (props) => {
  useEffect(() => {
    if (!props.basic && props.selectedUser) props.getBasic(props.selectedUser);
  }, []);
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "50%" }}>
        <S.SubHeader>Basic</S.SubHeader>
      </div>
      <div style={{ width: "50%" }}>
        {props.basic ? (
          <S.SubHeader>Basic</S.SubHeader>
        ) : (
          <ClipLoader color={"#36d7b7"} />
        )}
      </div>
    </div>
  );
};

export default Basic;
