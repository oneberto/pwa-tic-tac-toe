import styled from "styled-components";
import MediaQueries from "../../assets/mediaQueries";
import { SystemColors } from "../../assets/colors";
import { zoomIn } from "../../assets/animations";

export const HashWrapper = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    animation: ${zoomIn} 0.2s ease-in;
`;

export const HashContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;

    ${MediaQueries.BIGGER_THAN_TABLET} {
        flex: unset;
        width: 500px;
    }
`;

export const HashRow = styled.div`
    display: flex;
    flex: 1;

    :not(:last-child) {
        border-bottom: ${SystemColors.Border} 8px solid;
    }
`;
