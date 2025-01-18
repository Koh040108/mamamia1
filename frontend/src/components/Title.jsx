import React from "react";
import PropTypes from "prop-types";

const Title = ({ text1, text2 }) => {
    return (
        <div className="text-center">
            <h1 className="text-3xl sm:text-5xl font-bold mb-4">
                {text1} <span className="text-blue-500">{text2}</span>
            </h1>
        </div>
    );
};

// Define prop types for better debugging and maintenance
Title.propTypes = {
    text1: PropTypes.string.isRequired,
    text2: PropTypes.string.isRequired,
};

// Default props in case none are provided
Title.defaultProps = {
    text1: "Default Title",
    text2: "Default Subtitle",
};

export default Title;
