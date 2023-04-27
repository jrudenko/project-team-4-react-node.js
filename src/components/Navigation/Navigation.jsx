import { useMediaQuery } from 'react-responsive';
import { Flex, NavBar, NavItem, NavLinkStyled, SearchIcon } from './Navigation.styled';
import { useLocation, useParams } from 'react-router-dom';

const Navigation = (props) => {

  const isMobileOrTablet = useMediaQuery({ maxWidth: 1439 });
  const { onClick } = props;
  const { pathname } = useLocation();
  const recipe = useParams();
  return (
    <NavBar mr={props.mr} fd={props.fd} >
      <NavItem>
        <NavLinkStyled to="/categories/Beef" onClick={onClick} pathname={pathname} recipe={recipe}>
          Categories
        </NavLinkStyled>
      </NavItem>
      <NavItem>
        <NavLinkStyled to="/add " onClick={onClick} pathname={pathname} recipe={recipe}>
          Add recipes
        </NavLinkStyled>
      </NavItem>
      <NavItem>
        <NavLinkStyled to="/my" onClick={onClick} pathname={pathname} recipe={recipe}>
          My recipes
        </NavLinkStyled>
      </NavItem>
      <NavItem>
        <NavLinkStyled to="/favorite" onClick={onClick} pathname={pathname} recipe={recipe}>
          Favorites
        </NavLinkStyled>
      </NavItem>
      <NavItem>
        <NavLinkStyled to="/shopping-list" onClick={onClick} pathname={pathname} recipe={recipe}>
          Shopping list
        </NavLinkStyled>
      </NavItem>
      <NavItem>
        <NavLinkStyled to="/search" onClick={onClick} pathname={pathname} recipe={recipe}>
          {isMobileOrTablet ? (
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
};

export default Navigation;