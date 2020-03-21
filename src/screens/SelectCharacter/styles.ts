import styled from "styled-components";
import MediaQueries from "../../assets/mediaQueries";
import { SystemColors } from "../../assets/colors";
import {
    bounceInUp,
    bounceInRight,
    bounceInLeft
} from "../../assets/animations";

export const SelectCharacterContainer = styled.div`
    width: 100%;
    height: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const SelectCharacterTitle = styled.h1`
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 32px;
    animation: ${bounceInUp} 1s ease-in;
`;

export const SelectCharacterIcons = styled.div`
    display: flex;
`;

export const SelectCharacterIconButton = styled.button`
    flex: 1;
    padding: 32px;

    ${MediaQueries.BIGGER_THAN_TABLET} {
        max-width: 150px;
        padding: 16px;
    }

    :hover {
        background: ${SystemColors.Hover};
    }

    :first-child {
        animation: ${bounceInLeft} 1s ease-in-out;
    }

    :not(:first-child) {
        animation: ${bounceInRight} 1s ease-in-out;
    }
`;
