import React from "react";
import { Link } from "react-router-dom";
import RMDBLogo from "../../Images/react-movie-logo.svg";
import TMDBLogo from "../../Images/tmdb-logo.svg";

import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.Style";
export const Header = () => {
    return (
        <Wrapper>
            <Content>
                <Link to="/">
                    <LogoImg src={RMDBLogo} alt="rmdb-logo"></LogoImg>
                </Link>

                <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo"></TMDBLogoImg>
            </Content>
        </Wrapper>
    );
};
export default Header;
