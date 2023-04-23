import FavoriteList from 'components/FavoriteList/FavoriteList';
import Title from 'components/Title/Title';
// import BGDots from 'reusableComponents/BGDots/BGDots';
import FavoriteWrapper from './Favorite.styled';
import Scroll from '../../utils/scroll';

const Favorite = () => (
  <FavoriteWrapper>
    {/* <BGDots /> */}
        <Title>Favorite</Title>
    <FavoriteList />
    <Scroll />
  </FavoriteWrapper>
);

export default Favorite;