import React, { useState, useCallback } from "react";

// Assets
import { GameContainer, GameWrapper } from "./styles";

// Helpers
import { ThemeColors } from "../../assets/colors";

// Components
import ChangeColor from "../../components/ChangeColor";
import Hash from "../../components/Hash";

const Game = () => {
    const [backgroundColor, setBackgroundColor] = useState<ThemeColors>(
        ThemeColors.Black
    );

    const handleChangeBackgroundColor = useCallback((color: ThemeColors) => {
        try {
            setBackgroundColor(color);

            // change chrome url bar color
            const metaThemeColor = document.querySelector(
                "meta[name=theme-color]"
            );

            if (!!metaThemeColor) {
                metaThemeColor.setAttribute("content", color);
            }
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <GameWrapper backgroundColor={backgroundColor}>
            <GameContainer>
                <ChangeColor
                    onClick={handleChangeBackgroundColor}
                    activeColor={backgroundColor}
                />

                <Hash />
            </GameContainer>
        </GameWrapper>
    );
};

export default Game;
