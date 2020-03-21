import styled from "styled-components";
import { SystemColors } from "../../assets/colors";
import { zoomIn } from "../../assets/animations";

export const CubeContainer = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;

    :not(:last-child) {
        border-right: ${SystemColors.Border} 8px solid;
    }
`;

export const CubeButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 16px;
    transition: background-color 0.2s ease;

    :hover {
        background-color: ${SystemColors.Hover};
    }

    :after {
        content: "";
        padding-top: 100%;
        display: block;
    }

    svg {
        animation: ${zoomIn} 0.15s ease-in;
    }
`;
