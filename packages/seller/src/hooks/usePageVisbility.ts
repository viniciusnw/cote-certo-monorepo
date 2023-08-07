import { useEffect, useState } from 'react';

export function usePageVisibility(
  onVisibilityChange: (isVisible: boolean) => void,
) {
  const [isVisible, setIsVisible] = useState(!document.hidden);

  const handleVisibilityChange = () => {
    setIsVisible(!document.hidden);
    onVisibilityChange(!document.hidden);
  };

  useEffect(() => {
    document.addEventListener(
      'visibilitychange',
      handleVisibilityChange,
      false,
    );

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return isVisible;
}
