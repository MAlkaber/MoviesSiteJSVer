import React from "react";
import { calcTime, convertMoney } from "../../helpers";
import { Content, Wrapper } from "./MovieInfoBarStyle";
import PropTypes from "prop-types";
// helpers

const MovieInfoBar = ({ time, budget, revenue }) => {
    return (
        <div>
            <Wrapper>
                <Content>
                    <div className="column">
                        <p>Running Time : {calcTime(time)}</p>
                    </div>
                    <div className="column">
                        <p>Budget : {convertMoney(budget)}</p>
                    </div>
                    <div className="column">
                        <p>Revenue : {convertMoney(revenue)}</p>
                    </div>
                </Content>
            </Wrapper>
        </div>
    );
};

MovieInfoBar.propTypes = {
    time: PropTypes.number,
    budget: PropTypes.number,
    revenue: PropTypes.number,
};
export default MovieInfoBar;
