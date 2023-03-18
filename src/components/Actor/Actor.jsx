import React from "react";
import PropTypes from "prop-types";
import { Wrapper, Image } from "./Actor.Style";

const Actor = ({ name, charcter, imageUrl }) => {
    return (
        <div>
            <Wrapper>
                <Image src={imageUrl} alt="actor-thumb" />
                <h3>{name}</h3>
                <p>{charcter}</p>
            </Wrapper>
        </div>
    );
};

Actor.proTypes = {
    name: PropTypes.string,
    charcter: PropTypes.string,
    imageUrl: PropTypes.string,
};

export default Actor;
