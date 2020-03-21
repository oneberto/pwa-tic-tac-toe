import styled from "styled-components";

export const Wrapper = styled.main<{ backgroundColor: string }>`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: ${({ backgroundColor }) => backgroundColor};
    display: flex;
    align-items: center;
    justify-content: center;
`;
