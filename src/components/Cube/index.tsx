import React from "react";
import { CubeContainer, CubeButton } from "./styles";
import CercleIcon from "../Icons/Circle";
import XIcon from "../Icons/X";
import { SystemColors } from "../../assets/colors";

interface IProps {
    icon?: "x" | "circle";
}

const Cube = ({ icon }: IProps) => {
    return (
        <CubeContainer>
            <CubeButton>
                {icon === "circle" && (
                    <CercleIcon
                        width="100%"
                        height="100%"
                        color={SystemColors.Border}
                    />
                )}

                {icon === "x" && (
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
