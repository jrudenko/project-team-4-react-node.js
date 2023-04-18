import Container from 'components/Container';
import Title from 'components/Title';
// import PageEmpty from 'components/PageEmpty';

// import img from '../../images/default.jpg';

import { ContentWrapper, Wrapper } from './FavoritePage.styled';

const FavoritePage = () => {
    return (
        <Wrapper>
            <Container>
                <Title>Favorites</Title>
            </Container>
            {/* <PageEmpty text="You currently don't have any favorite recipes added. Let's add some!" /> */}
            <ContentWrapper></ContentWrapper>
        </Wrapper>);
};

export default FavoritePage;