import styled from "styled-components";
import MediaQueries from "../../assets/mediaQueries";

export const GameWrapper = styled.main<{ backgroundColor: string }>`
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

export const GameContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 1rem;
    display: flex;
    align-items: center;
    position: relative;
    flex-direction: column;

    ${MediaQueries.BIGGER_THAN_TABLET} {
        width: 85%;
        height: 85%;
        flex-direction: unset;
    }
`;
