interface IconProps{
    height:string
    width:string
    color?:string
    className?:string
  }
const PlayIconCircle = ({height,width,className}:IconProps) => {
    
    return (
        <svg
      xmlns="http://www.w3.org/2000/svg"
      width={height}
      height={width}
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
          fill="#fff"
          d="M86 146.2c-33.248 0-60.2-26.952-60.2-60.2 0-33.248 26.952-60.2 60.2-60.2 33.248 0 60.2 26.952 60.2 60.2 0 33.248-26.952 60.2-60.2 60.2z"
        ></path>
        <path
          fill="#2ecc71"
          d="M86 20.156c-36.365 0-65.844 29.48-65.844 65.844 0 36.365 29.48 65.844 65.844 65.844 36.365 0 65.844-29.48 65.844-65.844 0-36.365-29.48-65.844-65.844-65.844zm25.955 73.724l-40.851 23.585c-6.066 3.502-13.649-.875-13.649-7.88v-47.17c0-7.005 7.583-11.382 13.649-7.88l40.85 23.585c6.066 3.502 6.066 12.258 0 15.76z"
        ></path>
      </g>
    </svg>
    )
}

export default PlayIconCircle
