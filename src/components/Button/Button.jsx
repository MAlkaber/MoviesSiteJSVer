import PropTypes from "prop-types";
import React from "react";
import { Wrapper } from "./Button.Style";

const Button = ({ text, callback }) => {
    return <Wrapper onClick={callback}>{text}</Wrapper>;
};

Button.proTypes = {
    text: PropTypes.string,
    callback: PropTypes.bool,
};

export default Button;
