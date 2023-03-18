import styled from "styled-components";

export const Wrapper = styled.button`
    display: block;
    margin: 20px auto;
    background-color: var(--darkGray);
    padding: 7px 20px;
    color: white;
    border: none;
    width: 25%;
    min-width: 200px;
    height: 60px;
    font-size: var(--fontBig);
    outline: none;
    transition: all 0.3s;
    cursor: pointer;
    border-radius: 30px;
    :hover {
        opacity: 0.8;
    }
`;
