import { ButtonHTMLAttributes } from "react";
import Button from "../style.tsx";

const RestartButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <Button {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0,0,256,256"
        width="96px"
        height="96px"
      >
        <g
          fill="#c3073f"
          fillRule="nonzero"
          stroke="none"
          strokeWidth="1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          strokeDasharray=""
          strokeDashoffset="0"
          fontFamily="none"
          fontWeight="none"
          fontSize="none"
          textAnchor="none"
        >
          <g transform="scale(4,4)">
            <path d="M29.30469,6c-0.67613,-0.00675 -1.30469,0.53052 -1.30469,1.29102v3.08008c-10.2266,1.88732 -18,10.86444 -18,21.62891c0,12.131 9.869,22 22,22c12.131,0 22,-9.869 22,-22c0,-6.96 -3.34903,-13.58375 -8.95703,-17.71875c-0.889,-0.656 -2.14388,-0.46612 -2.79687,0.42188c-0.656,0.889 -0.46617,2.14283 0.42383,2.79883c4.59,3.384 7.33008,8.80405 7.33008,14.49805c0,9.925 -8.075,18 -18,18c-9.925,0 -18,-8.075 -18,-18c0,-8.54858 5.9965,-15.70917 14,-17.53516v2.24414c0,1.014 1.11661,1.6318 1.97461,1.0918l7.3418,-4.62305c0.868,-0.546 0.868,-1.81142 0,-2.35742l-7.3418,-4.62109c-0.2145,-0.135 -0.44455,-0.19697 -0.66992,-0.19922z" />
          </g>
        </g>
      </svg>
    </Button>
  );
};

export default RestartButton;
