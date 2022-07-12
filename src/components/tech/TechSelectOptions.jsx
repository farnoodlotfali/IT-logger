import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getTechs } from "../../actions/techActions";

const TechSelectOptions = ({ tech: { techs, loading }, getTechs }) => {
  useEffect(() => {
    getTechs();
  }, []);
  return (
    !loading &&
    techs !== null &&
    techs.map((item) => {
      return (
        <option key={item.id} value={`${item.firstName} ${item.lastName}`}>
          {item.firstName} {item.lastName}
        </option>
      );
    })
  );
};

TechSelectOptions.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
};
const mapStateProps = (state) => ({
  tech: state.tech,
});

export default connect(mapStateProps, { getTechs })(TechSelectOptions);
