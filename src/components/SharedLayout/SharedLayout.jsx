// import { Suspense } from "react";
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
        
      <LayoutContainer>
        {/* <Suspense fallback={<div>Loader...</div>}> */}
        <Outlet />
        {/* </Suspense> */}
        <LeafBackground></LeafBackground>
      </LayoutContainer>
      
      <Footer />
    </div>
  );
};
export default SharedLayout;
