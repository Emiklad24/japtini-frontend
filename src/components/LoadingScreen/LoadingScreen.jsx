import { motion } from "framer-motion";
// import { useEffect } from "react";

const LoadingScreen = () => {
  return (
    <motion.div
      className="h-screen w-screen bg-white-100 fixed bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10  text-lg z-50 flex items-center justify-center "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{
          margin: "auto",
          background: "none",
          display: "block",
          shapeRendering: "auto",
        }}
        width="50px"
        height="50px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <g transform="translate(26.666666666666668,26.666666666666668)">
          <rect x={-20} y={-20} width={40} height={40} fill="#5463ff">
            <animateTransform
              attributeName="transform"
              type="scale"
              repeatCount="indefinite"
              dur="1s"
              keyTimes="0;1"
              values="1.1500000000000001;1"
              begin="-0.3s"
            />
          </rect>
        </g>
        <g transform="translate(73.33333333333333,26.666666666666668)">
          <rect x={-20} y={-20} width={40} height={40} fill="#5463ff">
            <animateTransform
              attributeName="transform"
              type="scale"
              repeatCount="indefinite"
              dur="1s"
              keyTimes="0;1"
              values="1.1500000000000001;1"
              begin="-0.2s"
            />
          </rect>
        </g>
        <g transform="translate(26.666666666666668,73.33333333333333)">
          <rect x={-20} y={-20} width={40} height={40} fill="#5463ff">
            <animateTransform
              attributeName="transform"
              type="scale"
              repeatCount="indefinite"
              dur="1s"
              keyTimes="0;1"
              values="1.1500000000000001;1"
              begin="0s"
            />
          </rect>
        </g>
        <g transform="translate(73.33333333333333,73.33333333333333)">
          <rect x={-20} y={-20} width={40} height={40} fill="#5463ff">
            <animateTransform
              attributeName="transform"
              type="scale"
              repeatCount="indefinite"
              dur="1s"
              keyTimes="0;1"
              values="1.1500000000000001;1"
              begin="-0.1s"
            />
          </rect>
        </g>
      </svg>
    </motion.div>
  );
};

export default LoadingScreen;
