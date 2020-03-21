import React from "react";

// Assets
import { HashWrapper, HashContainer, HashRow } from "./styles";

// Components
import Cube from "../Cube";
import Character from "../../assets/characteres";

interface IProps {
    data: Array<Array<Character | string>>;
    onClick(result: { line: number; cube: number }): void;
}

const Hash = ({ data, onClick }: IProps) => {
    return (
        <HashWrapper>
            <HashContainer>
                {data.map((line, lineIndex) => {
                    return (
                        <HashRow key={`line_${lineIndex}`}>
                            {line.map((character, characterIndex) => (
                                <Cube
                                    key={`cube_${characterIndex}`}
                                    onClick={() =>
                                        character === "" &&
                                        onClick({
                                            line: lineIndex,
                                            cube: characterIndex
                                        })
                                    }
                                    {...(!!character && { icon: character })}
                                />
                            ))}
                        </HashRow>
                    );
                })}
            </HashContainer>
        </HashWrapper>
    );
};

export default Hash;
