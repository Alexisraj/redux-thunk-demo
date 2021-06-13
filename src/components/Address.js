import ClipLoader from "react-spinners/ClipLoader";
import * as S from "./userStyledComp";

const FormatContent = (address) => {
  return address?.length > 0 ? (
    <>
      <span>Residing at:</span>
      {address.map((s) => (
        <span>{s.address}</span>
      ))}
    </>
  ) : (
    "No Address found"
  );
};
const Address = (props) => {
  return (
    <div>
      {props.address ? (
        FormatContent(props.address)
      ) : (
        <ClipLoader color={"#36d7b7"} />
      )}
    </div>
  );
};

export default Address;
