import React from "react"

export default function SpinSlogan(): JSX.Element {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="300px"
      height="300px"
      viewBox="0 0 300 300"
      enableBackground="new 0 0 300 300"
      xmlSpace="preserve"
      className="slogan"
    >
      <defs>
        <path
          id="circlePath"
          d="M75,150A75,75 0 1 1225,150A75,75 0 1 175,150"
        />
      </defs>
      <circle cx="150" cy="150" r="135" fill="transparent" />
      <g>
        <text className="slogan-text">
          <textPath
            aria-label="One Mile One Footprint Chain the Future"
            xlinkHref="#circlePath"
          >
            One Mile One Footprint Chain the Future
          </textPath>
        </text>
      </g>
    </svg>
  )
}
