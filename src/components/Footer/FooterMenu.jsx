import{MenuItems, Item } from './Footer.styled'
import { Link } from 'react-router-dom';

export const FooterMenu = () => {
  return (
    <>
      <MenuItems>

          <Link to="/search" style={{
            color: "white",
            textDecoration: 'none'
          }}>
            <Item> Ingredients </Item>
          </Link>

          <Link to="/add" style={{
            color: "white",
            textDecoration: 'none'
          }}>
             <Item>Add recipes </Item>
          </Link>

          <Link to="/my" style={{
            color: "white",
            textDecoration: 'none'
          }}>
             <Item>My recipes</Item>
          </Link>

          <Link to="/favorite" style={{
            color: "white",
            textDecoration: 'none'
          }}>
            <Item> Favorite</Item>
          </Link>


          <Link to="/shopping-list" style={{
            color: "white",
            textDecoration: 'none'
          }}>
           <Item>Shopping list </Item>
          </Link>

      </MenuItems>
    </>
  );
};
