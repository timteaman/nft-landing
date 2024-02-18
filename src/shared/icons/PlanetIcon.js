import * as React from "react";
const SvgPlanetIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    height={100}
    fill="none"
    {...props}
  >
    <path
      stroke="#FFF"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M50 84.375c-18.985 0-34.375-15.39-34.375-34.375S31.015 15.625 50 15.625 84.375 31.015 84.375 50 68.985 84.375 50 84.375Z"
    />
    <path
      stroke="#FFF"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M71.953 23.555C82.773 20.587 90.898 20.86 93.32 25c4.297 7.462-11.602 24.727-35.508 38.516C33.906 77.306 11.015 82.462 6.68 75.001c-2.382-4.141 1.446-11.329 9.414-19.22"
    />
  </svg>
);
export default SvgPlanetIcon;
