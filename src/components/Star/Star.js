import React from "react";
import PropTypes from "prop-types";

const Star = ({ cloth, toggleFavorites, filledStar }) => {
  return (
    <div
      onClick={(e) => {
        toggleFavorites(cloth.id);
      }}
      className="card__star-container"
    >
      <svg
        fill={filledStar ? "black" : "none"}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    </div>
  );
};

Star.propTypes = {
  cloth: PropTypes.object.isRequired,
  toggleFavorites: PropTypes.func.isRequired,
  filledStar: PropTypes.bool.isRequired,
};

export default Star;
