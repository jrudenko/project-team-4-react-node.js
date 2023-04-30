import {Conteiner,LinkItem } from './SocMedia.styled';
import { SiFacebook, SiYoutube, SiTwitter, SiInstagram } from "react-icons/si";


const SocMedia = () => {

  return (
    <Conteiner>
      <LinkItem>
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="link to Facebook" >
       <SiFacebook size="26" />
      </a></LinkItem>

      <LinkItem>
      <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="link to Youtube" >
        <SiYoutube size="28" />
      </a>
      </LinkItem>

      <LinkItem>
      <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="link to Twitter" >
        <SiTwitter size="25" />
      </a>
      </LinkItem>

      <LinkItem>
      <a href="https://www.instagram.com/"  target="_blank" rel="noopener noreferrer" aria-label="link to Instagram">
      <SiInstagram size="24" />
      </a>
      </LinkItem>

    </Conteiner>
  )
};

export default SocMedia;

