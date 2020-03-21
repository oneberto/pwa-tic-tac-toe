import styled, { css } from "styled-components";
import MediaQueries from "../../assets/mediaQueries";
import { SystemColors } from "../../assets/colors";

interface IChangeColorButtonProps {
    backgroundColor: string;
    active: boolean;
}

export const ChangeColorContainer = styled.div`
    display: flex;
    width: 100%;

    ${MediaQueries.BIGGER_THAN_TABLET} {
        position: absolute;
        width: 20px;
        flex-direction: column;
        top: 0;
    }
`;

export const ChangeColorButton = styled.button<IChangeColorButtonProps>`
    display: flex;
    flex-direction: column;
    content: " ";
    background-color: ${({ backgroundColor }) => backgroundColor};
    height: 20px;
    transition: box-shadow 0.2s ease;
    flex: 1;

    ${MediaQueries.BIGGER_THAN_TABLET} {
        flex: unset;
        height: 40px;
    }

    :hover {
        box-shadow: inset 0px 0px 0px 1px ${SystemColors.Border};
    }

    ${({ active }) =>
        active &&
        css`
            box-shadow: inset 0px 0px 0px 1px ${SystemColors.Border};
        `}
`;
