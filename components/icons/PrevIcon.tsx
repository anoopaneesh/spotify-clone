import React from "react";
interface IconProps{
    height:string
    width:string
    color?:string
    className?:string
}

function Icon({height,width,color,className}:IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      x="0"
      y="0"
      viewBox="0 0 172 172"
      className={className}
    >
      <g
        fill="none"
        strokeMiterlimit="10"
        fontFamily="none"
        fontSize="none"
        fontWeight="none"
        textAnchor="none"
        style={{ mixBlendMode: "normal" }}
      >
        <path d="M0 172V0h172v172z"></path>
        <path
          fill={color}
          d="M43 34.4a8.603 8.603 0 00-8.6 8.6v86c0 4.747 3.853 8.6 8.6 8.6s8.6-3.853 8.6-8.6V43c0-4.747-3.853-8.6-8.6-8.6zm88.867 0a5.733 5.733 0 00-3.404 1.12c-.053.04-.106.081-.157.123l-62.597 45.52a5.913 5.913 0 01-.01.01l-.09.068A5.733 5.733 0 0063.067 86a5.733 5.733 0 002.575 4.782l62.82 45.698a5.733 5.733 0 009.138-4.636V40.156v-.023a5.733 5.733 0 00-5.733-5.733z"
        ></path>
      </g>
    </svg>
  );
}

export default Icon;
