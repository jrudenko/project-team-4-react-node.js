
import {
  TABLET_SCREEN,
  LG_DESKTOP_SCREEN,
  RESOLUTIONS_LIST,
} from '../Constants/breakPointConstants';
import { useEffect, useState } from 'react';

export const useMedia = () => {
  const [screenType, setScreenType] = useState('');
  const [isMobileScreen, setIsMobileScreen] = useState(
    window.innerWidth < TABLET_SCREEN
  );
  const [isTabletScreen, setIsTabletScreen] = useState(
    window.innerWidth >= TABLET_SCREEN && window.innerWidth < LG_DESKTOP_SCREEN
  );
  const [isDesktopScreen, setIsDesktopScreen] = useState(
    window.innerWidth >= LG_DESKTOP_SCREEN
  );
  const setMatched = (type, size, e = { matches: false }) => {
    if (e.matches) {
      setScreenType(type);
      setIsMobileScreen(size < TABLET_SCREEN);
      setIsTabletScreen(size >= TABLET_SCREEN && size < LG_DESKTOP_SCREEN);
      setIsDesktopScreen(size >= LG_DESKTOP_SCREEN);
    }
  };
  useEffect(() => {
    RESOLUTIONS_LIST.forEach(({ type, size }, idx) => {
      let rule = `(min-width: ${size}px)`;
      if (RESOLUTIONS_LIST[idx + 1]?.size) {
        const nextSize = RESOLUTIONS_LIST[idx + 1].size - 1;
        rule += ` and (max-width: ${nextSize}px)`;
      }

      const MQ = window.matchMedia(rule);
      setMatched(type, size, MQ);

      MQ.addEventListener('change', e => setMatched(type, size, e));
    });
  });
  return { screenType, isMobileScreen, isTabletScreen, isDesktopScreen };
};
