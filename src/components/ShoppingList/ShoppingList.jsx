import { useSelector } from 'react-redux';
import { ShoppingListItem } from './ShoppingListItem';
import { ShoppingBox } from './ShoppingBox';
import { Paginator } from '../Paginator/Paginator';
import { useState } from 'react';

export const ShoppingList = () => {
  const { items } = useSelector(state => state.shoppings);
  const [currentItems, setCurrentItems] = useState([]);
  const itemsPerPage = 10;

  return (
    <>
      <ShoppingBox as={'ul'}>
        {currentItems.map(item => (
          <ShoppingListItem key={item._id} item={item} />
        ))}
      </ShoppingBox>
      <ShoppingBox mt={20}>

        <Paginator
          totalItems={items}
          perPage={itemsPerPage}
          setCurrentItems={setCurrentItems}
        />
       
      </ShoppingBox>
    </>
  );
};