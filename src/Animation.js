import React, { useEffect, useRef } from 'react';

const Animation = () => {
  const pathRef = useRef();

  useEffect(() => {
    console.log(pathRef.current.getTotalLength());
  }, []);

  return (
    <div>
      <svg>
        <circle
          strokeWidth="3"
          cx="100"
          cy="50"
          r="40"
          stroke="black"
          fill="none"
          ref={pathRef}
        />
      </svg>
    </div>
  );
};

export default Animation;
