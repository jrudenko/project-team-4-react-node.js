import  {useMedia}  from 'hooks';
import Title from 'components/Title/Title';
import { Box } from 'components/Box';
import { AddRecipeForm } from 'components/AddRecipeForm/AddRecipeForm';
import  PopularRecipe  from 'components/PopularRecipe/PopularRecipe';
import {Networks} from 'components/SocialMedia/Networks';
import {
  Page,
  ContainerForm,
  ContainerPopular,
  SharedContainer,
  SocialsTitle,
} from './AddRecipePage.styled';
import Scroll from '../../utils/scroll';

const AddRecipePage = () => {
  const { isDesktopScreen } = useMedia();
  return (
    <Page>
      <Title>Add recipe</Title>
      <SharedContainer>
        <ContainerForm>
          <AddRecipeForm />
        </ContainerForm>
        <ContainerPopular>
          {isDesktopScreen && (
            <Box mb={100}>
              <SocialsTitle>Follow us</SocialsTitle>
              <Networks place="recipe-page" sizeIcon={26} />
            </Box>
          )}
          <PopularRecipe />
        </ContainerPopular>
      </SharedContainer>
      <Scroll />
    </Page>
  );
};

export default AddRecipePage;
