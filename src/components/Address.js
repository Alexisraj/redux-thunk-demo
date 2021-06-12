import ClipLoader from "react-spinners/ClipLoader";
import * as S from "./userStyledComp";

const Address = (props) => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "50%" }}>
        <S.SubHeader>Address</S.SubHeader>
      </div>
      <div style={{ width: "50%" }}>
        {props.address ? (
          <S.SubHeader>Location</S.SubHeader>
        ) : (
          <ClipLoader color={"#36d7b7"} />
        )}
      </div>
    </div>
  );
};

export default Address;
