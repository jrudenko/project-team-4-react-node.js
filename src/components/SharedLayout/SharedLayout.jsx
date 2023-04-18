import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
    return (
        <div>
          <header>This Header</header>
          <Suspense fallback={<div>Loader...</div>}>
            <Outlet/>
          </Suspense>
          <footer>This Footer</footer>
        </div>
    )
}
export default SharedLayout