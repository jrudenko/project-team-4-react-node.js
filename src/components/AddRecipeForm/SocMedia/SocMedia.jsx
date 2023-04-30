import {Conteiner, Facebook, Youtube, Twitter, Instagram} from './SocMedia.styled';

const SocMedia = () => {

  return (
    <Conteiner>
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="link to Facebook">
        <Facebook/>
      </a>
      <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="link to Youtube">
        <Youtube/>
      </a>
      <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="link to Twitter">
        <Twitter/>
      </a>
      <a href="https://www.instagram.com/"  target="_blank" rel="noopener noreferrer" aria-label="link to Instagram">
        <Instagram/>
      </a>
    </Conteiner>
  )
};

export default SocMedia;
