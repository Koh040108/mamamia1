import React from "react";
import PropTypes from "prop-types";

const Title = ({ text1, text2 }) => {
    return (
        <div className="text-center">
            <h1 className="text-3xl sm:text-5xl font-bold mb-4">
                {text1} <span className="text-blue-500">{text2}</span>
            </h1>
        <div className="flex flex-col items-center justify-center h-full">
            <div className="inline-flex gap-2 items-center mb-3">
                <p className="text-gray-500">
                    {text1} <span className="text-gray-700 font-medium">{text2}</span>
                </p>
                <div className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></div>
            </div>
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
