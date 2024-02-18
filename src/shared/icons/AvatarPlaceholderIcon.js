import * as React from "react";
const SvgAvatarPlaceholderIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <defs>
      <pattern
        id="avatar-placeholder-icon_svg__b"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use
          xlinkHref="#avatar-placeholder-icon_svg__a"
          transform="scale(.00098)"
        />
      </pattern>
      <image
        id="avatar-placeholder-icon_svg__a"
        width={1024}
        height={1024}
      />
    </defs>
    <rect
      width={24}
      height={24}
      fill="url(#avatar-placeholder-icon_svg__b)"
      rx={12}
    />
  </svg>
);
export default SvgAvatarPlaceholderIcon;