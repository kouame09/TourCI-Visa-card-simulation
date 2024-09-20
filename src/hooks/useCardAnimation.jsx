import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

const useCardAnimation = (cardDetails) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      scale: [1, 1.05, 1],
      transition: { duration: 0.3 }
    });
  }, [cardDetails, controls]);

  return controls;
};

export default useCardAnimation;