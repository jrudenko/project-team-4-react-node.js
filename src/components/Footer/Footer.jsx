import { FooterConteiner,MenuBox, MainBox, FormBox,  DescreptionWrapper, SocialMadia} from './Footer.styled';

import { Preferences } from './BenefitsList';
import { LogoFooter } from './LogoFooter';
import { FooterMenu } from './FooterMenu';
import { Networks } from 'components/SocialMedia/Networks';
import SubscribeForm from 'components/SubscribeForm/SubscribeForm';
import DownFooter from 'components/Footer/DownFooter/DownFooter';


export const Footer = () => {
  return (
    <>
      <FooterConteiner>
        <MainBox>

           <DescreptionWrapper>
                <LogoFooter/>
                <Preferences />
          </DescreptionWrapper>

           <MenuBox>
             <FooterMenu />
          </MenuBox>

          <FormBox>
          <SubscribeForm />
        </FormBox>

        </MainBox>

        <SocialMadia>
           <Networks />
        </SocialMadia>

      </FooterConteiner>

      <DownFooter></DownFooter>
      </>

  );
};
