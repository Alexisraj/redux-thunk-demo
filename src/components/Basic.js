import ClipLoader from "react-spinners/ClipLoader";

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
              <li>{i}</li>
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
        <ClipLoader color={"#36d7b7"} />
      )}
    </div>
  );
};

export default Basic;
