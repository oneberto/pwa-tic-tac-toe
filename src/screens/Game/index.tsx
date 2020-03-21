import React, { useState, useCallback } from "react";

// Components
import Hash from "../../components/Hash";

// Helpers
import Character from "../../assets/characteres";

// enum GameStatus {
//     Winner = "winner",
//     Lost = "lost"
// }

interface IProps {
    selectedCharacter: Character;
}

const INITIAL_DATA = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

const Game = ({ selectedCharacter }: IProps) => {
    const [data, setData] = useState<Array<Array<Character | string>>>(
        INITIAL_DATA
    );

    // TODO: END GAME!!!

    // const [gameStatus, setGameStatus] = useState<GameStatus>();

    // const handleFinishGame = useCallback(() => {

    //     try {

    //     } catch (error) {
    //         console.log(error);
    //     }

    // }, []);

    // TODO: MAKE THIS BETTER :(
    const handleRobotPlay = useCallback(() => {
        try {
            const tempData = [...data];

            const blankLineIndexs = tempData
                .map((line, index) => {
                    return line.some(character => character === "")
                        ? index
                        : false;
                })
                .filter(Boolean);

            if (!blankLineIndexs || blankLineIndexs.length === 0) {
                console.log("fim de jogo!");
                return;
            }

            const randomBlankLine =
                blankLineIndexs[(Math.random() * blankLineIndexs.length) | 0] ||
                0;

            const blankCubeIndex = tempData[randomBlankLine].indexOf("");

            // update data
            tempData[randomBlankLine][blankCubeIndex] =
                selectedCharacter === Character.X
                    ? Character.Cercle
                    : Character.X;

            setData(tempData);
        } catch (error) {
            console.log(error);
        }
    }, [data, selectedCharacter]);

    const handleUserClick = useCallback(
        (result: { line: number; cube: number }) => {
            try {
                const { line, cube } = result;

                if (line === undefined || cube === undefined) {
                    throw new Error();
                }

                const tempData = [...data];

                tempData[line][cube] = selectedCharacter;

                setData(tempData);

                setTimeout(() => handleRobotPlay(), 1000);
            } catch (error) {
                console.log(error);
            }
        },
        [data, handleRobotPlay, selectedCharacter]
    );

    return <Hash data={data} onClick={handleUserClick} />;
};

export default Game;
