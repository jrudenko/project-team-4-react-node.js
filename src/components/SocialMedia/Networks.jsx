import {MediaConteiner, FacebookIcon, YoutubeIcon, TwitterIcon, InstagramIcon} from './Networks.styled'

export const Networks = () => {
  return (
    <MediaConteiner>
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="link to Facebook">
        <FacebookIcon/>
      </a>
      <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="link to Youtube">
        <YoutubeIcon/>
      </a>
      <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="link to Twitter">
        <TwitterIcon/>
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="link to Instagram">
        <InstagramIcon/>
      </a>
    </MediaConteiner>
  )
}
