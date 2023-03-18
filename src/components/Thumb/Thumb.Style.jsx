import styled from "styled-components";

export const Image = styled.img`
    width: 100%;
    max-width: 720px;
    /* max-height: 300px; */
    transition: all 0.3s;
    object-fit: cover;
    justify-content: center;
    border-radius: 20px;
    animation: anmateThumb 0.5s;

    :hover {
        opacity: 0.8;
    }
    @keyframes anmateThumb {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
