import ClipLoader from "react-spinners/ClipLoader";

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
          <ClipLoader color={"#36d7b7"} />
        )}
      </div>
    </div>
  );
};

export default UserContact;
