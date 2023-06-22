import { useState, useEffect } from 'react';

export default function useDetectMobile() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  const handleWindowSizeChange = () => {
    setWindowWidth(window.innerWidth);
    setIsMobile(window.innerWidth <= 600);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return {
    isMobile, windowWidth,
  };
}
