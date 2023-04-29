import { ReactComponent as MainImg } from 'images/authImg/mainImg.svg';
import { ReactComponent as HumanImg } from 'images/authImg/humanImg.svg';
import { ReactComponent as FirstImg } from 'images/authImg/firstImg.svg';
import { ReactComponent as SecondImg } from 'images/authImg/secondImg.svg';
import { ReactComponent as ThirdImg } from 'images/authImg/thirdImg.svg';
import { ReactComponent as FourthImg } from 'images/authImg/fourthSvg.svg';
import {
  ImageMain,
  HumanImage,
  FirstImage,
  SecondImage,
  ThirdImage,
  FourthImage,
  Fifthimage,
  Sixthimage,
} from './AuthImg.styled';

export const AuthImg = () => {
  return (
    <ImageMain>
      <MainImg />

      <HumanImage>
        <HumanImg />
      </HumanImage>

      <FirstImage>
        <FirstImg />
      </FirstImage>

      <SecondImage>
        <SecondImg />
      </SecondImage>

      <ThirdImage>
        <ThirdImg />
      </ThirdImage>
     
      <Fifthimage>
      <FourthImg />
      </Fifthimage>

      <Sixthimage>
      <FourthImg />
      </Sixthimage>
      
      <FourthImage>
        <FourthImg />
      </FourthImage>
    </ImageMain>
  );
};
