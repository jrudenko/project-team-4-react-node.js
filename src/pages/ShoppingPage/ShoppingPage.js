import React, { useEffect } from 'react';
import Title from 'components/Title/Title';
import { EmptyMessage, TableHeader, TableTitle } from './ShoppingPage.styled';
import { useMedia } from 'hooks';
import { useDispatch, useSelector } from 'react-redux';
import { getList } from '../../redux/shoppingList/shoppingListOperations';
import { Loader } from 'components/Loader/Loader';
import { ShoppingList } from '../../components/ShoppingList/ShoppingList';

const ShoppingPage = () => {
  const { screenType } = useMedia();
  const { items, isLoading } = useSelector(state => state.shoppings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getList());
  }, [dispatch]);

  const titles = ['Products', 'Number', 'Remove'];

  return (
    <main>
      <Title>Shopping list</Title>

      {isLoading && (
        <div
          style={{
            margin: '30px 0px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {<Loader />}
        </div>
      )}
      {items?.length > 0 && (
        <>
          <TableHeader>
            {titles.map(title => (
              <TableTitle key={title} screenType={screenType}>
                {title}
              </TableTitle>
            ))}
          </TableHeader>
          <ShoppingList />
        </>
      )}

      {!items?.length > 0 && !isLoading && (
        <EmptyMessage>
          You haven't added any ingredients to your shopping list yet!
        </EmptyMessage>
      )}
    </main>
  );
};

export default ShoppingPage;
