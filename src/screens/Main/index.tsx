import React, { useState, useCallback } from "react";

// screens
import SelectCharacter from "../SelectCharacter";
import Game from "../Game";

// assets
import { Wrapper } from "./styles";
import { ThemeColors } from "../../assets/colors";
import ChangeColor from "../../components/ChangeColor";
import { Container } from "../../assets/global";
import Character from "../../assets/characteres";

const Main = () => {
    const [selectedCharacter, setSelectedCharacter] = useState<Character>();
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

    const handleSelectCharacter = useCallback((chracter: Character) => {
        setSelectedCharacter(chracter);
    }, []);

    return (
        <Wrapper backgroundColor={backgroundColor}>
            <Container>
                <ChangeColor
                    onClick={handleChangeBackgroundColor}
                    activeColor={backgroundColor}
                />
                {!!selectedCharacter ? (
                    <Game selectedCharacter={selectedCharacter} />
                ) : (
                    <SelectCharacter onClick={handleSelectCharacter} />
                )}
            </Container>
        </Wrapper>
    );
};

export default Main;
