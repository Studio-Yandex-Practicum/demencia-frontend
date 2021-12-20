import { keyframes } from "styled-components";

const rotation = keyframes`
0% {
    transform: rotate(0deg);
}
100% {
    transform: rotate(360deg);
}`;

const translate = keyframes`
    0% {
        transform: translate(50%, 150%);
    }
    100% {
        transform: translate(0px, 0px);
    }`;

export { rotation, translate };
