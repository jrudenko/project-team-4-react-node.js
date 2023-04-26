import { Box } from 'components/Box';
import React, { useEffect } from 'react';
import { mobileLow, tabletLow, desktopLow } from 'images/bg/bgError';
import { useMedia } from 'hooks';
import { InformImage, InformText } from './NotFoundPage.styled';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NotFoundPage = () => {
  const { isMobileScreen, isDesktopScreen, isTabletScreen } = useMedia();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoggedIn) {
        navigate('/main', { replace: true });
      } else {
        navigate('/signin', { replace: true });
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate, isLoggedIn]);

  const imageSrc =
    (isMobileScreen && mobileLow) ||
    (isTabletScreen && tabletLow) ||
    (isDesktopScreen && desktopLow);

  return (
    <Box as={'main'} mt={52}>
      <InformImage src={imageSrc} alt="not found" />
      <InformText>
        We are sorry,
        <span>but the page you were looking for can't be found...</span>
      </InformText>
    </Box>
  );
};

export default NotFoundPage;
