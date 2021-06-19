import ClipLoader from "react-spinners/ClipLoader";
import styled from "styled-components";

const Loader = styled.div`
  display: grid;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;
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
          <Loader>
            <ClipLoader color={"#36d7b7"} />
          </Loader>
        )}
      </div>
    </div>
  );
};

export default Skills;
