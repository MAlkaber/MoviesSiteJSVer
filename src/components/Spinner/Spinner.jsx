import styled from "styled-components";

const Spinner = styled.div`
    border-top: 5px solid var(--lightGray);
    border-right: 5px solid var(--darkGray);
    border-bottom: 5px solid var(--lightGray);
    border-left: 5px solid var(--darkGray);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background-color: transparent;
    animation: spin 0.8s linear infinite;
    margin: 20px auto;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
export default Spinner;
