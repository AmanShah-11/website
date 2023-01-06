import React from "react";
import _ from "lodash";
import emailjs from "emailjs-com";
import { Button, Form, Input, Label, TextArea } from "semantic-ui-react";
import Swal from "sweetalert2";
import {
  BtnWrap,
  Column1,
  Column2,
  Heading,
  Img,
  ImgWrap,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
} from "../InfoSection/InfoElements";

const SkillsSection = () => {
  const colors = [
    "red",
    "orange",
    "yellow",
    "olive",
    "green",
    "teal",
    "blue",
    "violet",
    "purple",
    "pink",
    "brown",
    "grey",
    "black",
  ];
  const languages = ["Python", "C++", "Javascript", "HTML", "CSS"];

  const tools = [
    "React",
    "Django",
    "Django Rest Framework",
    "Docker",
    "SQLite",
    "Oracle",
    "Selenium",
  ];

  const other = [
    "Docker",
    "Git",
    "AWS",
    "Google Cloud",
    "Visual Studio Code",
    "Jira",
  ];

  const LabelExampleColored = () => (
    <div>
      {languages.map((language, index) => (
        <Label color={colors[index]} key={language}>
          {_.capitalize(language)}
        </Label>
      ))}
      <br></br>
      {tools.map((tool, index) => (
        <Label color={colors[index]} key={tool}>
          {_.capitalize(tool)}
        </Label>
      ))}
      <br></br>
      {other.map((oth, index) => (
        <Label color={colors[index]} key={oth}>
          {_.capitalize(oth)}
        </Label>
      ))}
    </div>
  );

  return (
    <>
      <InfoContainer lightBg={true} id={"skills"}>
        <InfoWrapper>
          <InfoRow imgStart={false}>
            <Column1>
              <TextWrapper>
                <TopLine></TopLine>
                <Heading lightText={false}>Skills</Heading>
                <Subtitle darkText={true}></Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              {/* <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap> */}
              {LabelExampleColored()}
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default SkillsSection;
