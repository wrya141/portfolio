"use client";

import React, { useEffect, useState } from "react";

const createfireflies = () => ({
  id: Math.random(),
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  animationDelay: `${Math.random() * 5 + 5}s`,
});

const FireFliesBackground = () => {
  const [FireFlies, setFireFlies] = useState([]);

  useEffect(() => {
    const addfireflies = () => {
      const newfirflies = createfireflies();
      setFireFlies((currentFireFlies) => [
        ...currentFireFlies.slice(-14),
        newfirflies,
      ]);
    };
    const interval = setInterval(addfireflies, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      {FireFlies.map((firefly) => {
        return (
          <div
            key={firefly.id}
            className="absolute  rounded-full  w-[10px] h-[10px] bg-fireflies-radial"
            style={{
              top: firefly.top,
              left: firefly.left,
              animation: `move  ${firefly.animationDelay} infinite alternate`,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default FireFliesBackground;
