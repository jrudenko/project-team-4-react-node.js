import { useSelector } from 'react-redux';
import { ShoppingListItem } from './ShoppingListItem';
import { Box } from '../Box';
import { Paginator } from '../Paginator/Paginator';
import { useState } from 'react';

export const ShoppingList = () => {
  const { items } = useSelector(state => state.shoppings);
  const [currentItems, setCurrentItems] = useState([]);
  const itemsPerPage = 10;

  return (
    <>
      <Box as={'ul'}>
        {currentItems.map(item => (
          <ShoppingListItem key={item._id} item={item} />
        ))}
      </Box>
      <Box mt={20}>

        <Paginator
          totalItems={items}
          perPage={itemsPerPage}
          setCurrentItems={setCurrentItems}
        />
       
      </Box>
    </>
  );
};