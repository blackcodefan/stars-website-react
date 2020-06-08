import React from "react";
import styled from "styled-components";

const Icon = styled.svg`
  width: auto;
`;

const Demo = props => {
    return (
        <Icon
            height="70px"
            viewBox="0 0 32 36"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <defs/>
            <g
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
            >
                <path
                    d="M260.4,335.4h57.4V512h53V0H141.2v512h53V335.4h57.4 M335.4,141.2h-53v53h-53v-53h-53v-53h53v-53h53v53h53V141.2z"></path>
                <path d="M370.8,194.2V512h123.6V194.2H370.8z M459,476.7h-53v-35.3h53V476.7z M459,406.1h-53v-35.3h53V406.1z M459,335.4h-53v-35.3
	h53V335.4z M459,264.8h-53v-35.3h53V264.8z"></path>
                <path d="M17.7,194.2V512h123.6V194.2H17.7z M105.9,476.7H53v-35.3h53L105.9,476.7L105.9,476.7z M105.9,406.1H53v-35.3h53
	L105.9,406.1L105.9,406.1z M105.9,335.4H53v-35.3h53L105.9,335.4L105.9,335.4z M105.9,264.8H53v-35.3h53L105.9,264.8L105.9,264.8z"></path>
            </g>
        </Icon>
    );
};
export default Demo;
