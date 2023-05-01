import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
    SubInput,
    InputIcon,
    InputBox,
    SubForm,
    FormFrame,
    SubTitle,
    SubText,
    TextFrame,
    FormBtn,
  } from './SubscribeForm.styled';
  import { useMedia } from 'hooks';

const SubscribeForm = () => {
  const { screenType } = useMedia();
  const [email, setEmail] = useState("");

  const isValidEmail = (email) => {
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return regex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subscribedEmail = localStorage.getItem("subscribedEmail");

    if (email === "") {
      toast.error("Please enter your email");
    } else if (!isValidEmail(email)) {
      toast.error("Please enter a valid email");
    } else if (subscribedEmail === email) {
      toast.error("You have already subscribed with this email");
    } else {
      localStorage.setItem("subscribedEmail", email);
      toast.success("You have successfully subscribed!");
    }
  };

  return (
    <SubForm>
       {screenType === 'desktop' ? (
        <TextFrame>
          <SubTitle>Subscribe to our Newsletter</SubTitle>
          <SubText>
            Subscribe up to our newsletter. Be in touch with latest news and
            special offers, etc.
          </SubText>
        </TextFrame>
      ) : null}
      <FormFrame onSubmit={handleSubmit}>
        <InputBox >
        <InputIcon/>
        <SubInput
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your current email"
        />
        </InputBox>

        <FormBtn type="submit"
                look="subscribe"
                onClick={event => {
                          handleSubmit(event);
                        }}
        >Subscribe</FormBtn>
      </FormFrame>
    </SubForm>
  );
};

export default SubscribeForm;
