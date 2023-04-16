import CategoriesPage from "../pages/Categories/CategoriesPage";
import { Route, Routes } from "react-router-dom";


export const App = () => {
  return (
  <>
      <Routes>
        <Route path="/" element={<CategoriesPage />}>

          <Route path="*" element={<h1>Error</h1> } />
        </Route>
      </Routes>

    </>
  );
};
