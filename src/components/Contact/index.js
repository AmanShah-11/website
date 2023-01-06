import React from "react";
import emailjs from "emailjs-com";
import { Button, Form, Input, TextArea } from "semantic-ui-react";
import Swal from "sweetalert2";
import "./index.css";
import {
  BtnWrap,
  Column1,
  Column2,
  Heading,
  Img,
  imgStart,
  ImgWrap,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
} from "../InfoSection/InfoElements";

const ContactForm = () => {
  const SERVICE_ID = "service_98qn3tk";
  const TEMPLATE_ID = "template_y5kfm3f";
  const USER_ID = "user_5kCdEoj6DZ2e9yTfJxl8m";

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };

  return (
    <InfoContainer lightBg={true} id={"contact"}>
      <InfoWrapper>
        <InfoRow imgStart={false}>
          <Column1>
            <TextWrapper>
              <TopLine>{"Want more info?"}</TopLine>
              <Heading lightText={false}>
                {"Send me a personalized email!"}
              </Heading>
              <Subtitle darkText={true}>
                {
                  "Please provide a detailed message and I'll get back to you as soon as I can"
                }
              </Subtitle>
            </TextWrapper>
          </Column1>
          <Column2>
            <Form onSubmit={(e) => handleOnSubmit(e)}>
              <Form.Field
                id="form-input-control-email"
                control={Input}
                label="Email"
                name="user_email"
                placeholder="Email…"
                required
                icon="mail"
                iconPosition="left"
              />
              <Form.Field
                id="form-input-control-last-name"
                control={Input}
                label="Name"
                name="user_name"
                placeholder="Name…"
                required
                icon="user circle"
                iconPosition="left"
              />
              <Form.Field
                id="form-textarea-control-opinion"
                control={TextArea}
                label="Message"
                name="user_message"
                placeholder="Message…"
                required
              />
              <Button type="submit" color="red">
                Submit
              </Button>
            </Form>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default ContactForm;
