import { useState, useEffect } from 'react';

const getWindow = () => {
  const isClient = typeof window === 'object';

  const getWindowSize = () => ({
    width: isClient ? window.innerWidth : undefined,
    height: isClient ? window.innerHeight : undefined,
  });

  const [windowSize, setWindowSize] = useState(getWindowSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function onResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, []);

  return windowSize;
};

export default getWindow;
