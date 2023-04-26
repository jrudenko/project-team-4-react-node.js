// import { IoClose } from 'react-icons/io5';
import {
  Descriptions,
  ImageItem,
  ShoppingItem,
  Bage,
  CloseButton,
} from './ShoppingList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem } from '../../redux/shoppingList/shoppingListOperations';
// import { Loader } from 'components/Loader/Loader';
import { useState } from 'react';

export const ShoppingListItem = ({ item }) => {
  const dispatch = useDispatch();
  const darkMode = useSelector(state => state.theme);
  const isDeleting = useSelector(state => state.shoppings.isDeleting);

  const [ setDeletingId ] = useState(null);

  const handleDeleteItem = id => {
    setDeletingId(item.productId);
    dispatch(deleteItem(id));
  };

  return (
    <ShoppingItem>
      <Descriptions>
        <ImageItem src={item.thb} alt={item.ttl} />
        <p>{item.ttl}</p>
      </Descriptions>
      <div>
        <Bage>
          {item.measure.map(item => (
            <span key={Math.random()}>{item}</span>
          ))}
        </Bage>
        <CloseButton
          disabled={isDeleting}
          dark={darkMode.darkMode}
          onClick={() => handleDeleteItem(item.productId)}
        >
          {/* {isDeleting && deletingId ? (
            <Loader size="28" />
          ) : (
            <IoClose size={24} />
          )} */}
        </CloseButton>
      </div>
    </ShoppingItem>
  );
};