import ClipLoader from "react-spinners/ClipLoader";
import styled from "styled-components";

const Loader = styled.div`
  display: grid;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;
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
        <Loader>
          <ClipLoader color={"#36d7b7"} />
        </Loader>
      )}
    </div>
  );
};

export default Address;
