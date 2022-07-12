import { connect } from "react-redux";
import { searchLogs } from "../../actions/logActions";
import PropTypes from "prop-types";
import { useRef } from "react";

const SearchBar = ({ searchLogs }) => {
  const inputRef = useRef();

  const handleOnchange = (e) => {
    // searchLogs(e.target.value)
    searchLogs(inputRef.current.value);
  };
  return (
    <nav style={{ marginBottom: "30px" }} className="blue">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              style={{ paddingLeft: "130px" }}
              id="search"
              type="search"
              onChange={handleOnchange}
              ref={inputRef}
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};
SearchBar.propTypes = {
  searchLogs: PropTypes.func.isRequired,
};
export default connect(null, { searchLogs })(SearchBar);
