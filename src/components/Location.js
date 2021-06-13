import ClipLoader from "react-spinners/ClipLoader";
import * as S from "./userStyledComp";

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
        <ClipLoader color={"#36d7b7"} />
      )}
    </div>
  );
};

export default Location;
