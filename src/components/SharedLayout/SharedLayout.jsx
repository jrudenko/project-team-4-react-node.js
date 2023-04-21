import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "components/Header";
import { Footer } from "components/Footer/Footer";

const SharedLayout = () => {
    return (
      <div>
        <Header />
          <header>This Header</header>
          <Suspense fallback={<div>Loader...</div>}>
            <Outlet/>
        </Suspense>
        <Footer/>
        </div>
    )
}
export default SharedLayout
