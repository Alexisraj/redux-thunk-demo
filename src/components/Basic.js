import ClipLoader from "react-spinners/ClipLoader";
import styled from "styled-components";

const Loader = styled.div`
  display: grid;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;
const FormatContent = (basic) => {
  basic = Array.isArray(basic) ? basic[0] : basic;
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "40%" }}>
        <span>Working in:</span>
        <span>{basic.company}</span>
      </div>
      {basic.intrested?.length > 0 && (
        <div style={{ width: "60%" }}>
          <span>Intrested In:</span>
          <ol>
            {basic.intrested.map((i) => (
              <li style={{ listStyle: "none" }}>{i}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

const Basic = (props) => {
  return (
    <div>
      {props.basic ? (
        FormatContent(props.basic)
      ) : (
        <Loader>
          <ClipLoader color={"#36d7b7"} />
        </Loader>
      )}
    </div>
  );
};

export default Basic;
