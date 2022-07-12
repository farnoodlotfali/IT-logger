import React from "react";
import PropTypes from "prop-types";
import { Trash2 } from "react-feather";
import { connect } from "react-redux";
import { deleteTechs } from "../../actions/techActions";
import M from "materialize-css/dist/js/materialize.min.js";

const TechItem = ({ tech, deleteTechs }) => {
  const handleOnclick = () => {
    deleteTechs(tech.id);
    M.toast({ html: `${tech.firstName} ${tech.lastName} is deleted` });
  };

  return (
    <li className="collection-item">
      <div>
        {tech.firstName} {tech.lastName}
        <a href="#!" className="secondary-content" onClick={handleOnclick}>
          <Trash2 color="grey" />
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTechs: PropTypes.func.isRequired,
};

export default connect(null, { deleteTechs })(TechItem);
