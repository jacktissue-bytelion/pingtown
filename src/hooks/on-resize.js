import { useEffect } from 'react';

const OnResize = (callback) => {
  useEffect(() => {
    const handleResize = () => {
      callback();
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
};

export default OnResize;
