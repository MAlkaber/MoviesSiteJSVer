import PropTypes from "prop-types";
import React from "react";

import { Wrapper, Content, Text } from "./HeroImage.Style";

const HeroImage = ({ image, title, text }) => {
    return (
        <div>
            <Wrapper image={image}>
                <Content>
                    <Text>
                        <h1>{title}</h1>
                        <p>{text}</p>
                    </Text>
                </Content>
            </Wrapper>
        </div>
    );
};

HeroImage.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
};
export default HeroImage;
