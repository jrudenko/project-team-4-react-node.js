import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "components/Header";
import { Footer } from "components/Footer/Footer";
import { LayoutContainer, LeafBackground } from './SharedLayout.styled';

const SharedLayout = () => {
    return (
      <div>
        <Header />
        
          <LayoutContainer>
          <Suspense fallback={<div>Loader...</div>}>
            <Outlet />
            </Suspense>
            <LeafBackground></LeafBackground>
          </LayoutContainer>
      
        <Footer/>
        </div>
    )
}
export default SharedLayout
