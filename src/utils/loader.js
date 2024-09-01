import React, { useEffect } from "react";

const loader = () => {
  const [currentProgress, setcurrentProgress] = useState(0);
  useEffect(() => {
    let loader = setInterval(() => {
      setcurrentProgress((prevProgress) => {
        let newProgress = prevProgress + Math.random() * 40;
        if (newProgress > 100) newProgress = 100;
        if (newProgress === 100) clearInterval(loader);
        return newProgress;
      });
    }, 800);
    return () => clearInterval(loader);
  }, []);
  return (
    <div
      className="h-1 bg-red-500 transition-all duration-200 absolute z-4 top-0"
      style={{ width: `${currentProgress}%` }}
    ></div>
  );
};

export default loader;
