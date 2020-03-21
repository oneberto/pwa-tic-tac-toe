import React from "react";
import { CubeContainer, CubeButton } from "./styles";
import CercleIcon from "../Icons/Circle";
import XIcon from "../Icons/X";
import { SystemColors } from "../../assets/colors";
import Character from "../../assets/characteres";

interface IProps {
    icon?: Character | string;
    onClick(): void;
}

const Cube = ({ icon, onClick }: IProps) => {
    return (
        <CubeContainer>
            <CubeButton onClick={onClick}>
                {icon === Character.Cercle && (
                    <CercleIcon
                        width="100%"
                        height="100%"
                        color={SystemColors.Border}
                    />
                )}

                {icon === Character.X && (
                    <XIcon
                        width="100%"
                        height="100%"
                        color={SystemColors.Border}
                    />
                )}
            </CubeButton>
        </CubeContainer>
    );
};

export default Cube;
