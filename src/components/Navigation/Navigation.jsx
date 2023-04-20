import { useMediaQuery } from 'react-responsive';
import { Flex, NavBar, NavItem, NavLinkStyled, SearchIcon } from './Navigation.styled';


const Navigation = (props) => {

  const isMobile = useMediaQuery({ maxWidth: 1439 });
  const { onClick } = props;
  return (
    <NavBar mr={props.mr} fd={props.fd}>
      <NavItem>
          <NavLinkStyled to="/categories" onClick={onClick}>
          Categories
        </NavLinkStyled>
      </NavItem>
      <NavItem>
        <NavLinkStyled to="/add " onClick={onClick}>
          Add recipes
        </NavLinkStyled>
      </NavItem>
      <NavItem>
        <NavLinkStyled to="/my" onClick={onClick}>
          My recipes
        </NavLinkStyled>
      </NavItem>
      <NavItem>
        <NavLinkStyled to="/favorite" onClick={onClick}>
          Favorites
        </NavLinkStyled>
      </NavItem>
      <NavItem>
        <NavLinkStyled to="/shopping-list" onClick={onClick}>
          Shopping list
        </NavLinkStyled>
      </NavItem>
      <NavItem>
        <NavLinkStyled to="/search" onClick={onClick}>
          {isMobile ? (
            <Flex>
              {' '}
              <SearchIcon /> Search{' '}
            </Flex>
          ) : (
            <SearchIcon />
          )}
        </NavLinkStyled>
      </NavItem>
    </NavBar>
  );
}

export default Navigation;