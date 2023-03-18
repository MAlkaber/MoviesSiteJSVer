import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Wrapper, Content } from "./BreadCrumb.Style";
const BreadCrumb = ({ movieTitle }) => {
    return (
        <div>
            <Wrapper>
                <Content>
                    <Link to="/">
                        <span>Home</span>
                    </Link>

                    <span>|</span>
                    <span>{movieTitle}</span>
                </Content>
            </Wrapper>
        </div>
    );
};

BreadCrumb.propTypes = {
    movieTitle: PropTypes.string,
};

export default BreadCrumb;
