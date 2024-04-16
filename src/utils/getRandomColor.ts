import getRandomInt from "./getRandomInt";

// chatGpt generated: "Please give me a javascript array of colors as valid typescript classes"
const colors = ["bg-red-500", "bg-green-500", "bg-orange-500", "bg-cyan-500"];

export default () => colors[getRandomInt(colors.length)];
