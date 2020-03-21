import React from "react";

// Assets
import {
    SelectCharacterContainer,
    SelectCharacterTitle,
    SelectCharacterIcons,
    SelectCharacterIconButton
} from "./styles";
import CercleIcon from "../../components/Icons/Circle";
import XIcon from "../../components/Icons/X";

// Helpers
import { SystemColors } from "../../assets/colors";
import Character from "../../assets/characteres";

interface IProps {
    onClick(character: Character): void;
}

const SelectCharacter = ({ onClick }: IProps) => (
    <SelectCharacterContainer>
        <SelectCharacterTitle>select your character</SelectCharacterTitle>

        <SelectCharacterIcons>
            <SelectCharacterIconButton
                onClick={() => onClick(Character.Cercle)}
            >
                <CercleIcon
                    width="100%"
                    height="100%"
                    color={SystemColors.Border}
                />
            </SelectCharacterIconButton>
            <SelectCharacterIconButton onClick={() => onClick(Character.X)}>
                <XIcon width="100%" height="100%" color={SystemColors.Border} />
            </SelectCharacterIconButton>
        </SelectCharacterIcons>
    </SelectCharacterContainer>
);

export default SelectCharacter;
