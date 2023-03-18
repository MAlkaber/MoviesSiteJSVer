import PropTypes from "prop-types";
import React, { useState, useEffect, useRef } from "react";
import searchIcon from "../../Images/search-icon.svg";
import { Content, Wrapper } from "./SearchBar.Style";

const SearchBar = ({ setSearchTerm }) => {
    const [state, setState] = useState();
    const intial = useRef(true);

    useEffect(() => {
        if (intial.current) {
            intial.current = false;
            return;
        }
        const timer = setTimeout(() => {
            setSearchTerm(state);
        }, 1500);
        return () => clearTimeout(timer);
    }, [setSearchTerm, state]);
    return (
        <div>
            <Wrapper>
                <Content>
                    <img src={searchIcon} alt="search-icon" />
                    <input
                        type="text"
                        placeholder="Search Movie"
                        onChange={(evn) => setState(evn.currentTarget.value)}
                        value={state}
                    />
                </Content>
            </Wrapper>
        </div>
    );
};

SearchBar.propTypes = {
    setSearchTerm: PropTypes.object,
};

export default SearchBar;
