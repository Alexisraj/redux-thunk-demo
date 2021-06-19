import ClipLoader from "react-spinners/ClipLoader";
import styled from "styled-components";

const Loader = styled.div`
  display: grid;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

const FormatContent = (contact) => {
  return contact?.length > 0 ? (
    <>
      <div>Contact Details:</div>
      {contact.map((c) => (
        <>
          Email : <span>{c.email}</span>
          <br />
          Phone : <span>{c.phone}</span>
        </>
      ))}
    </>
  ) : (
    "No Contacts found"
  );
};

const UserContact = (props) => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "100%" }}>
        {props.contact?.length > 0 ? (
          FormatContent(props.contact)
        ) : (
          <Loader>
            <ClipLoader color={"#36d7b7"} />
          </Loader>
        )}
      </div>
    </div>
  );
};

export default UserContact;
