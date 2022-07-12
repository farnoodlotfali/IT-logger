import { Plus, User, UserPlus } from "react-feather";

const AddBtn = () => {
  return (
    <div className="fixed-action-btn">
      <a
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
        }}
        className="btn-floating btn-large blue darken-2 modal-trigger"
        href="#add-log-modal"
      >
        <Plus size={25} />
      </a>

      <ul>
        <li>
          <a
            href="#tech-list-modal"
            className="btn-floating green modal-trigger"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
            }}
          >
            <User />
          </a>
        </li>{" "}
        <li>
          <a
            href="#tech-modal"
            className="btn-floating red modal-trigger"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
            }}
          >
            <UserPlus />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AddBtn;
