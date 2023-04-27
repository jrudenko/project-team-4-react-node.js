import {
  Wrapper,
  Title,
  Image,
  Box,
  ItemBox,
  Text,
  Label,
  ItemList,
} from './RecipePreparation.styled';

import noPhotoImg from '../../images/defaultImage/defaultImage.jpg';

export default function RecipePreparation({ recipe }) {
  const { instructions, preview, title } = recipe;
  const instructionsArray = instructions.split('. ');
  return (
    <Wrapper>
      <Title>Recipe Preparation</Title>
      <Box>
        <ItemList>
          {instructionsArray.length === 1 && (
            <Text>{instructionsArray[0]}</Text>
          )}
          {instructionsArray.length > 1 &&
            instructionsArray.map((item, idx) => (
              <ItemBox key={idx}>
                <Label>{idx + 1}</Label>
                <Text>{item.trim()}</Text>
              </ItemBox>
            ))}
        </ItemList>
        <Image src={preview ? preview : noPhotoImg} alt={title} />
      </Box>
    </Wrapper>
  );
}
