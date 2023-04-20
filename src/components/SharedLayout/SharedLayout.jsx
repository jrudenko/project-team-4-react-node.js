import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "components/Header";

const SharedLayout = () => {
    return (
      <div>
        <Header />
          <header>This Header</header>
          <Suspense fallback={<div>Loader...</div>}>
            <Outlet/>
          </Suspense>
          <footer>This Footer</footer>
        </div>
    )
}
export default SharedLayout