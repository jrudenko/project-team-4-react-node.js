import {BenefitsList, Benefits,BenefitsText } from './Footer.styled';

export const Preferences = () => {
  return (
    <>
      <BenefitsList>
        <Benefits>
          <BenefitsText>Database of recipes that can be replenished</BenefitsText>
          </Benefits>
        <Benefits>
          <BenefitsText>Flexible search for desired and unwanted ingredients</BenefitsText>
          </Benefits>
        <Benefits>
          <BenefitsText>Ability to add your own recipes with photos</BenefitsText>
        </Benefits>
        <Benefits>
          <BenefitsText>Convenient and easy to use</BenefitsText>
          </Benefits>
      </BenefitsList>
    </>
  )
}
