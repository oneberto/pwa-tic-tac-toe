import React from "react";
import { IIconProps } from "./IIconProps";

const CercleIcon = (props: IIconProps) => (
    <svg
        viewBox="0 0 100 100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x={0}
        y={0}
        {...props}
    >
        <circle
            cx="50"
            cy="50"
            r="46"
            fill="transparent"
            strokeWidth={8}
            stroke={props.color}
        />
    </svg>
);

export default CercleIcon;
