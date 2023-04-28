import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
import {
  Accent,
  Backdrop,
  Box,
  ButtonClose,
  Message,
  Wrapper,
} from './ModalMotivation.styled';
import icons from './sprite.svg';

import firstFavoriteDesktopRetinaOne from '../../images/bg/achieve/desktop_1_favorites@1x.png';
import firstFavoriteDesktopRetinaTwo from '../../images/bg/achieve/desktop_1_favorites@2x.png';
import firstFavoriteTabletRetinaOne from '../../images/bg/achieve/tablet_1_favorites@1x.png';
import firstFavoriteTabletRetinaTwo from '../../images/bg/achieve/tablet_1_favorites@2x.png';
import firstFavoriteMobileRetinaOne from '../../images/bg/achieve/mob_1_favorites@1x.png';
import firstFavoriteMobileRetinaTwo from '../../images/bg/achieve/mob_1_favorites@2x.png';

import tenFavoriteDesktopRetinaOne from '../../images/bg/achieve/desktop_10_favorites@1x.png';
import tenFavoriteDesktopRetinaTwo from '../../images/bg/achieve/desktop_10_favorites@2x.png';
import tenFavoriteTabletRetinaOne from '../../images/bg/achieve/tablet_10_favorites@1x.png';
import tenFavoriteTabletRetinaTwo from '../../images/bg/achieve/tablet_10_favorites@2x.png';
import tenFavoriteMobileRetinaOne from '../../images/bg/achieve/mob_10_favorites@1x.png';
import tenFavoriteMobileRetinaTwo from '../../images/bg/achieve/mob_10_favorites@2x.png';

import hundredDaysDesktopRetinaOne from '../../images/bg/achieve/desktop_100_days@1x.png';
import hundredDaysDesktopRetinaTwo from '../../images/bg/achieve/desktop_100_day@2x.png';
import hundredDaysTabletRetinaOne from '../../images/bg/achieve/tablet_100_days@1x.png';
import hundredDaysTabletRetinaTwo from '../../images/bg/achieve/tablet_100_days@2x.png';
import hundredDaysMobileRetinaOne from '../../images/bg/achieve/mob_100_days@1x.png';
import hundredDaysMobileRetinaTwo from '../../images/bg/achieve/mob_100_days@2x.png';

import firstShopDesktopRetinaOne from '../../images/bg/achieve/desktop_shp_list@1x.png';
import firstShopDesktopRetinaTwo from '../../images/bg/achieve/desktop_shp_list@2x.png';
import firstShopTabletRetinaOne from '../../images/bg/achieve/tablet_shp_list@1x.png';
import firstShopTabletRetinaTwo from '../../images/bg/achieve/tablet_shp_list@2x.png';
import firstShopMobileRetinaOne from '../../images/bg/achieve/mob_shp_list@1x.png';
import firstShopMobileRetinaTwo from '../../images/bg/achieve/mob_shp_list@2x.png';

const modalRoot = document.querySelector('#motivated-modal');

let modalType = null;

export const MotivatedModal = ({ type, isOpen }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    setIsOpenModal(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const onPressEsc = ({ key }) => {
      key === 'Escape' && setIsOpenModal(false);
    };
    document.addEventListener('keydown', onPressEsc);
    return () => document.removeEventListener('keydown', onPressEsc);
  }, []);

  const handleClose = () => {
    setIsOpenModal(false);
  };

  const onClickBackdrop = ({ target }) => {
    target.id === 'backdrop' && setIsOpenModal(false);
  };

  switch (type) {
    case 'ten-recipes':
      modalType = {
        img: {
          desktop: {
            retinaOne: tenFavoriteDesktopRetinaOne,
            retinaTwo: tenFavoriteDesktopRetinaTwo,
          },
          tablet: {
            retinaOne: tenFavoriteTabletRetinaOne,
            retinaTwo: tenFavoriteTabletRetinaTwo,
          },
          mobile: {
            retinaOne: tenFavoriteMobileRetinaOne,
            retinaTwo: tenFavoriteMobileRetinaTwo,
          },
        },
        message: (
          <Message>
            <Accent>Wow!</Accent> You have added 10 recipes to your favorites!
          </Message>
        ),
      };
      break;
    case '100-days':
      modalType = {
        img: {
          desktop: {
            retinaOne: hundredDaysDesktopRetinaOne,
            retinaTwo: hundredDaysDesktopRetinaTwo,
          },
          tablet: {
            retinaOne: hundredDaysTabletRetinaOne,
            retinaTwo: hundredDaysTabletRetinaTwo,
          },
          mobile: {
            retinaOne: hundredDaysMobileRetinaOne,
            retinaTwo: hundredDaysMobileRetinaTwo,
          },
        },
        message: (
          <Message>
            <Accent>Wow!</Accent> You have been using the application for{' '}
            <Accent>100 </Accent>
            days!
          </Message>
        ),
      };
      break;
    case 'first favorite':
      modalType = {
        img: {
          desktop: {
            retinaOne: firstFavoriteDesktopRetinaOne,
            retinaTwo: firstFavoriteDesktopRetinaTwo,
          },
          tablet: {
            retinaOne: firstFavoriteTabletRetinaOne,
            retinaTwo: firstFavoriteTabletRetinaTwo,
          },
          mobile: {
            retinaOne: firstFavoriteMobileRetinaOne,
            retinaTwo: firstFavoriteMobileRetinaTwo,
          },
        },
        message: (
          <Message>
            <Accent>Wow!</Accent> You have added the first recipe to your
            favorites!
          </Message>
        ),
      };
      break;
    case 'first shopping':
      modalType = {
        img: {
          desktop: {
            retinaOne: firstShopDesktopRetinaOne,
            retinaTwo: firstShopDesktopRetinaTwo,
          },
          tablet: {
            retinaOne: firstShopTabletRetinaOne,
            retinaTwo: firstShopTabletRetinaTwo,
          },
          mobile: {
            retinaOne: firstShopMobileRetinaOne,
            retinaTwo: firstShopMobileRetinaTwo,
          },
        },
        message: (
          <Message>
            <Accent>Wow!</Accent> You have created your first shopping list!
          </Message>
        ),
      };
      break;
    default:
      modalType = {
        img: null,
        message: 'ERROR',
      };
  }

  if (!isOpenModal) {
    return null;
  }

  return (
    <>
      {createPortal(
        <Backdrop onClick={onClickBackdrop} id="backdrop">
          <Box img={modalType.img}>
            <Wrapper img={modalType.img}>
              <div>{modalType.message}</div>
              <ButtonClose type="click" onClick={handleClose}>
                <svg width={15} height={15} fill={'white'}>
                  <use href={icons + '#icon-cross'}></use>
                </svg>
              </ButtonClose>
            </Wrapper>
          </Box>
        </Backdrop>,
        modalRoot
      )}
    </>
  );
};
