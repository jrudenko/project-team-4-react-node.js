// // import React, { useEffect } from 'react';
// import MainTitle from 'components/MainTitle/MainTitle';
// import { EmptyMessage, TableHeader, TableTitle } from './ShoppingPage.styled';
// // import { useMedia } from 'hooks';
// import { ShoppingList } from 'components/ShoppingList/ShoppingList';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { getList } from '../../../redux/shoppingList/shoppingListOperations';
// // import { Loader } from 'components/Loader/Loader';

// const ShoppingPage = () => {
//   //   const { screenType } = useMedia();
//   //   const { items, isLoading } = useSelector(state => state.shoppings);

//   //   const dispatch = useDispatch();

//   //   useEffect(() => {
//   //     dispatch(getList());
//   //   }, [dispatch]);

//   //   const titles = ['Product', 'Number', 'Remove'];

//   return (
//     <main>
//       <MainTitle text={'Shopping list'} />
//       {isLoading && (
//         <div
//           style={{
//             margin: '30px 0px',
//             display: 'flex',
//             justifyContent: 'center',
//           }}
//         >
//           {/* <Loader /> */}
//         </div>
//       )}
//       {!!items.length && (
//         <>
//           <TableHeader>
//             {titles.map(title => (
//               <TableTitle key={title} screenType={screenType}>
//                 {title}
//               </TableTitle>
//             ))}
//           </TableHeader>
//           <ShoppingList />
//         </>
//       )}

//       {!items.length && !isLoading && (
//         <EmptyMessage>
//           You haven't added any ingredients to your shopping list yet!
//         </EmptyMessage>
//       )}
//     </main>
//   );
// };

// export default ShoppingPage;
