import React from "react";

// Assets
import { HashWrapper, HashContainer, HashRow } from "./styles";

// Components
import Cube from "../Cube";

const Hash = () => {
    return (
        <HashWrapper>
            <HashContainer>
                <HashRow>
                    <Cube icon="x" />
                    <Cube icon="circle" />
                    <Cube icon="x" />
                </HashRow>
                <HashRow>
                    <Cube />
                    <Cube />
                    <Cube />
                </HashRow>
                <HashRow>
                    <Cube icon="x" />
                    <Cube icon="circle" />
                    <Cube icon="x" />
                </HashRow>
            </HashContainer>
        </HashWrapper>
    );
};

export default Hash;
