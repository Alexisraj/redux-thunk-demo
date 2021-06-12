import ClipLoader from "react-spinners/ClipLoader";
import * as S from "./userStyledComp";

const Skills = (props) => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "50%" }}>
        <S.SubHeader>Skill</S.SubHeader>
      </div>
      <div style={{ width: "50%" }}>
        {props.skill ? (
          <S.SubHeader>Location</S.SubHeader>
        ) : (
          <ClipLoader color={"#36d7b7"} />
        )}
      </div>
    </div>
  );
};

export default Skills;
