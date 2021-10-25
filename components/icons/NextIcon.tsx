import React from "react";
interface IconProps{
  height:string
  width:string
  color?:string
  className?:string
}
function NextIcon({width,height,color,className}:IconProps) {
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
          d="M40.133 34.4a5.733 5.733 0 00-5.733 5.756v91.711a5.733 5.733 0 005.733 5.733 5.733 5.733 0 003.393-1.12h.011c.053-.04.106-.081.157-.123l62.608-45.53a5.733 5.733 0 00.09-9.586L43.537 35.52a5.733 5.733 0 00-3.405-1.12zm88.867 0a8.603 8.603 0 00-8.6 8.6v86c0 4.747 3.853 8.6 8.6 8.6s8.6-3.853 8.6-8.6V43c0-4.747-3.853-8.6-8.6-8.6z"
        ></path>
      </g>
    </svg>
  );
}

export default NextIcon;
