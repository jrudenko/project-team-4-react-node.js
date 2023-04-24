// import * as React from 'react';
import { FooterConteiner } from './Footer.styled';

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
        <LogoFooter />
        <Preferences />
        <FooterMenu />
        <Networks />
        <SubscribeForm />
      </FooterConteiner>
      <DownFooter></DownFooter>
    </>
  );
};
