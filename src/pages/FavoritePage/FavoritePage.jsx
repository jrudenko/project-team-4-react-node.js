import Container from 'components/Container';
import Title from 'components/Title';

import { ContentWrapper, Wrapper } from './FavoritePage.styled';

const FavoritePage = () => {
    return (
        <Wrapper>
            <Container>
                <Title>Favorites</Title>
            </Container>
            <ContentWrapper></ContentWrapper>
        </Wrapper>);
};

export default FavoritePage;