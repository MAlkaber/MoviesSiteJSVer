import React from "react";
import { Wrapper, Content } from "./Grid.Style";
import PropTypes from "prop-types";

const Grid = ({ header, children }) => {
    return (
        <div>
            <Wrapper>
                <h1>{header}</h1>
                <Content>{children}</Content>
            </Wrapper>
        </div>
    );
};

Grid.propTypes = {
    header: PropTypes.string,
};

export default Grid;
