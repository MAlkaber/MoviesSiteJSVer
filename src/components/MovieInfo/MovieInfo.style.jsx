import styled from "styled-components";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../config";

export const Wrapper = styled.div`
    background: ${({ backdrop }) =>
        backdrop
            ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})`
            : "#000"};
    background-position: center;
    background-size: cover;
    padding: 40px 20px;
    animation: anmateMovieInfo 1s;
    @keyframes anmatMovieInfo {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;
export const Content = styled.div`
    display: flex;
    max-width: var(--maxWidth);
    justify-content: center;
    margin: 0 auto;
    background-color: rgb(0, 0, 0, 0.5);
    border-radius: 20px;
    @media screen and(max-width: 768px) {
        display: block;
        max-width: none;
    }
`;

export const Text = styled.div`
    width: 100%;
    padding: 20px 40px;
    color: white;
    overflow: hidden;
    .rating-directors {
        display: flex;
        justify-content: flex-start;
    }
    .score {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        background: #fff;
        color: #000;
        font-weight: 800;
        margin: -10px 0 0 15px;
        border-radius: 50%;
    }
    .director {
        margin: 0 0 0 40px;
        p {
            margin: 0;
        }
        h1 {
            @media screen and (width: 768px) {
                font-size: var(--fontBig);
            }
        }
    }
    h3 {
    }
`;
