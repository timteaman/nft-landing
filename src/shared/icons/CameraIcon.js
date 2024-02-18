import * as React from "react";
const SvgCameraIcon = (props) => (
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
      d="M18.75 81.25A6.25 6.25 0 0 1 12.5 75V31.25A6.25 6.25 0 0 1 18.75 25h12.5l6.25-9.375h25L68.75 25h12.5a6.25 6.25 0 0 1 6.25 6.25V75a6.25 6.25 0 0 1-6.25 6.25z"
    />
    <path
      stroke="#FFF"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M50 65.625c-7.767 0-14.062-6.296-14.062-14.062C35.938 43.796 42.233 37.5 50 37.5s14.063 6.296 14.063 14.063c0 7.766-6.297 14.062-14.063 14.062Z"
    />
  </svg>
);
export default SvgCameraIcon;
