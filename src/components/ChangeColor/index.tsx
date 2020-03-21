import React from "react";

// Assets
import { ChangeColorContainer, ChangeColorButton } from "./styles";

// Helpers
import { ThemeColors } from "../../assets/colors";

interface IProps {
    onClick(color: ThemeColors): void;
    activeColor: ThemeColors;
}

const ChangeColor = ({ onClick, activeColor }: IProps) => {
    const colors = Object.values(ThemeColors);

    return (
        <ChangeColorContainer>
            {colors.map(color => (
                <ChangeColorButton
                    key={color}
                    backgroundColor={color}
                    active={activeColor === color}
                    onClick={() => onClick(color)}
                />
            ))}
        </ChangeColorContainer>
    );
};

export default ChangeColor;
