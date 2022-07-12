import { useEffect } from "react";
import TechItem from "./TechItem";
import PropTypes from "prop-types";
import { getTechs } from "../../actions/techActions";
import { connect } from "react-redux";

const TechListModal = ({ tech: { techs, loading }, getTechs }) => {
  useEffect(() => {
    getTechs();
  }, []);

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-contecnt" style={{ padding: "10px" }}>
        <h4>Tech List</h4>
        <ul className="collection">
          {!loading &&
            techs !== null &&
            techs.map((item) => {
              return <TechItem key={item.id} tech={item} />;
            })}
        </ul>
      </div>
    </div>
  );
};
TechListModal.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
};
const mapStateProps = (state) => ({
  tech: state.tech,
});

export default connect(mapStateProps, { getTechs })(TechListModal);
