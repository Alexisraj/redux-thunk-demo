import ClipLoader from "react-spinners/ClipLoader";
import styled from "styled-components";

const Loader = styled.div`
  display: grid;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;
const FormatContent = (location) => {
  return location?.length > 0 ? (
    <>
      <span>Located In:</span>
      {location.map((s) => (
        <span>{s.loc}</span>
      ))}
    </>
  ) : (
    "No Location found"
  );
};
const Location = (props) => {
  return (
    <div>
      {props.location ? (
        FormatContent(props.location)
      ) : (
        <Loader>
          <ClipLoader color={"#36d7b7"} />
        </Loader>
      )}
    </div>
  );
};

export default Location;
