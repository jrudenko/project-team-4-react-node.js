import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "components/Header";
import { Footer } from "components/Footer/Footer";
import { LayoutContainer, LeafBackground } from './SharedLayout.styled';

const SharedLayout = () => {
    return (
      <div>
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
