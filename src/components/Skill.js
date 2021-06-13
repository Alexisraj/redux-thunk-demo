import ClipLoader from "react-spinners/ClipLoader";
import * as S from "./userStyledComp";

const FormatContent = (skills) => {
  return skills?.length > 0 ? (
    <>
      <span>Specialist In:</span>
      {skills.map((s) => (
        <span>{s.skills}</span>
      ))}
    </>
  ) : (
    "No Skillset found"
  );
};

const Skills = (props) => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "100%" }}>
        {props.skill?.length > 0 ? (
          FormatContent(props.skill)
        ) : (
          <ClipLoader color={"#36d7b7"} />
        )}
      </div>
    </div>
  );
};

export default Skills;
