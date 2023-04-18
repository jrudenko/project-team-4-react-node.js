
import searchMob1 from '../../images/search/searchWebp/Search-1x-mob.webp';
import searchMob2 from '../../images/search/searchWebp/Search-2x-mob.webp';
import searchTablet1 from '../../images/search/searchWebp/Search-1x-tab.webp';
import searchTablet2 from '../../images/search/searchWebp/Search-2x-tab.webp';
import searchDesktop1 from '../../images/search/searchWebp/Search-1x-desc.webp';
import searchDesktop2 from '../../images/search/searchWebp/Search-2x-desc.webp';

import {
  EmptyImgWrapper,
  EmptyText,
  EmptyWrapper,
} from './PageEmpty.styled';

const PageEmpty = ({ text }) => {
  return (
    <EmptyWrapper>
      <EmptyImgWrapper>
        <picture>          
          <source
            media="(min-width: 768px)"
            srcSet={`${searchTablet1}, ${searchTablet2} 2x`}
          />
          <source
            media="(min-width: 1440px)"
            srcSet={`${searchDesktop1}, ${searchDesktop2} 2x`}
          />
          <img
            src={searchMob1}
            srcSet={`${searchMob1}, ${searchMob2} 2x`}
            alt="no items found"
          />
        </picture>
      </EmptyImgWrapper>
      <EmptyText>{text}</EmptyText>
    </EmptyWrapper>
  );
};
export default PageEmpty;