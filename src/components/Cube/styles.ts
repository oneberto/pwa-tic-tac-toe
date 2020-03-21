import styled from "styled-components";
import { SystemColors } from "../../assets/colors";

export const CubeContainer = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 16px;

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

    :after {
        content: "";
        padding-top: 100%;
        display: block;
    }
`;
