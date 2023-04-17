import { Container } from 'components/Counter';
import { Title } from 'components/Title';

import { ContentWrapper, Wrapper } from './Favorites.styled';

const Favorites = () => {
    return (
        <Wrapper>
            <Container>
                <Title>Favorites</Title>
            </Container>
            <ContentWrapper></ContentWrapper>
        </Wrapper>);
};

export default Favorites;