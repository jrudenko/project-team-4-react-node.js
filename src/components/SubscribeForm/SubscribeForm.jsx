import axios from "axios";
import { toast } from 'react-toastify';
import {
  FormFrame,
  TextFrame,
    SubButton,
    SubForm,
    InputIcon,
    SubInput,
    SubText,
  SubTitle,
    InputBox,
} from "./SubscribeForm.styled";
import { useState, useEffect } from "react";

export const SubscribeForm = () => {
    const [email, setEmail] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);
    useEffect(() => {
        if (email.trim() !== "") {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [email]);

const handleSubmit = (event) => {
  event.preventDefault();
  const emailText = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  if (emailText.test(email)) {
    axios
      .patch("/user/subscription", { inputEmail: email })
      .then((response) => {
        toast.success("Email was successfully submitted!");
      })
      .catch((error) => {
        toast.error("Something went wrong. Please try again later!");
      });
  } else {
    toast.error("Please enter a valid email!");
  }
};
  const onChange = (event) => {
    setEmail(event.target.value);
  };
  return (
    <>
      <SubForm onSubmit={handleSubmit}>

        <TextFrame>
        <SubTitle>Subscribe to our Newsletter</SubTitle>
         <SubText>
          Subscribe up to our newsletter. Be in touch with latest news and special offers, etc.
        </SubText>
        </TextFrame>

        <FormFrame>
          <InputBox>
          <InputIcon />
          <SubInput
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={onChange}
          />
        </InputBox>
        <SubButton type="submit" disabled={isDisabled}>
          Subscribe
          </SubButton>
        </FormFrame>

      </SubForm>
    </>
  );

};
