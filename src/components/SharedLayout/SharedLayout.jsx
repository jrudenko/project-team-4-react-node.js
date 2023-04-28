import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Header from 'components/Header';
import { Footer } from 'components/Footer/Footer';
import {
  LayoutContainer,
  LeafBackground,
  Wrapper,
} from './SharedLayout.styled';
import { useSelector } from 'react-redux';

const SharedLayout = () => {
  const location = useLocation();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    // стилізувати дів
    <Wrapper>
      {isLoggedIn && location.pathname === '/' && <Navigate to="/main" />}
      <Header />
      <LayoutContainer>
        <Outlet />
        <LeafBackground></LeafBackground>
      </LayoutContainer>

      <Footer />
    </Wrapper>
  );
};
export default SharedLayout;
