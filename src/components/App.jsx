import { Route, Routes } from "react-router-dom";
import WelcomSection from 'pages/Welcome/WelcomSection';
import SharedLayout from './SharedLayout'
import FavoritePage from '../pages/FavoritePage'

// import { lazy } from 'react';

// const FavoritePage = lazy(() => import('../pages/FavoritePage'));


export const App = () => {
 return (
<Routes>
  <Route path="/welcome" element={<WelcomSection />} />

  <Route path="/register" element={<div>RegisterPage</div>}/>

  <Route path="/signin" element={<div>SigninPage</div>}/>

  <Route path="/" element={<SharedLayout/>}>

    <Route path="main" element={<div>MainPage</div>}/>

    <Route path="categories/:categoryName" element={<div>CategoriesPage</div>}/>

    <Route path="add" element={<div>AddRecipePage</div>}/>

    <Route path="favorite" element={<FavoritePage />}/>

    <Route path="recipe/:recipeId" element={<div>RecipePage</div>}/>

    <Route path="my" element={<div>MyRecipesPage</div>}/>

    <Route path="search" element={<div>SearchPage</div>}/>

    <Route path="shopping-list" element={<div>ShoppingListPage</div>}/>

    <Route path="*" element={<div>NotFoundPage</div>}/>

  </Route>

</Routes>
    
  )
};
