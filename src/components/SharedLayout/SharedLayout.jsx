import { Suspense } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Header from "components/Header";
import { Footer } from "components/Footer/Footer";
import { LayoutContainer, LeafBackground } from './SharedLayout.styled';
import { useSelector } from 'react-redux';

const SharedLayout = () => {
  const location = useLocation();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    return (
      <div>
        {isLoggedIn && location.pathname === '/' && <Navigate to="/main" />}
        <Header />
        <Suspense fallback={<div>Loader...</div>}>
          <LayoutContainer>
            <Outlet />
            <LeafBackground></LeafBackground>
          </LayoutContainer>
        </Suspense>
        <Footer/>
        </div>
    )
}
export default SharedLayout
