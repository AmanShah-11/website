import React, { useState } from "react";
import Icon4 from "../../images/svg-4.svg";
import Icon5 from "../../images/svg-5.svg";
import Icon6 from "../../images/svg-6.svg";
import Icon7 from "../../images/svg-7.svg";
import Icon8 from "../../images/svg-8.svg";
import Icon9 from "../../images/svg-9.svg";
import Icon10 from "../../images/svg-10.svg";
import Icon11 from "../../images/svg-11.svg";
import soneroImg from "../../images/sonero.png"
import fourglImg from "../../images/4gl_sol.jpg";
import polarImg from "../../images/polar_img.png";
import caaImg from "../../images/Caa_logo.jpg";
import eventSchedulerImg from "../../images/eventscheduler.PNG";
import smileyImg from "../../images/smiley.svg";
import bankLoanImg from "../../images/bankloan.png";
import studyImg from "../../images/study.svg";
import learnImg from "../../images/learn.svg";
import homePage from "../../images/homepage.PNG";

import ProjectModal from "../Modal";
import {
  ProjectsContainer,
  ProjectsH1,
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
  ServicesWrapperProject,
} from "./ServicesElements";

const Services = () => {
  const [showModal, setShowModal] = useState(false);

  const [dataindex, setDataIndex] = useState(0);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleShow = (index) => {
    setDataIndex(index);
    setShowModal(true);
  };

  const data = [
    {
      title: "Automatic Event Scheduler",
      subtitle: "Integrated with Google Cloud",
      img: eventSchedulerImg,
      description: `I built this application to help users schedule events when they have a general idea of what they want to do, but don't have a specific location in mind! \n
The application takes in information from user input and returns the location of the event and creates an event for it with the invited user in Google Calendar (performed in Django)
These events are then displayed in the React frontend so that users can easily see all of their events and whether they have been completed or not (based on the date or the event).
Users can register for the app through a simple user Django form that takes in basic information. \n
The React App offers basic CRUD functionality, however the implementation with the Google API is limited to the Django form to allow the user several ways to schedule events with others. \n
The Google APIs that I used include:
  Google Geocoding API
  Google Maps API
  Google Roads API (Future implementation of this app will allow users to get directions to the specified location).
  Google Calendar API \n
The things used to build this application include:
  Django
  Django Rest Framework
  Python
  React
  HTML
  CSS
  Javascript`,
      github: "https://github.com/AmanShah-11/django-google",
    },
    {
      title: "Facial Recognition System",
      subtitle: "Allows access based on existing users",
      img: smileyImg,
      description: `I made this project using AWS, Python, Django for the backend system and React for the frontend system. \n
What this does it that it looks for existing users in the system and sees if the current user matches with the one present. \n
If a match has occured, the user is allowed into the system, otherwise the user is locked from the system for a certain amount of time.`,
      github: "https://github.com/AmanShah-11/django_opencv",
    },
    {
      title: "Bank Loan System",
      subtitle: "Approval based on machine learning",
      img: bankLoanImg,
      description: `This project uses python, tensorflow and Django to determine whether a user would be approved or rejected for a loan. \n
The front-end form is built in Django, with the machine learning model built in Tensorflow, and all of the data manipulation done in python libraries such as pandas, numpy, scipy and tensorflow. \n
The machine learning model takes in 13 different factors from the user including:
  Dependents
  Applicant and CoApplicant Income
  LoanAmount
  Loan_Amount_Term
  Credit_History
  Gender
  Married
  Education
  Self_Employed
  Property_Area`,
      github: "https://github.com/AmanShah-11/django_bankloan",
    },
    {
      title: "Species Prediction Model",
      subtitle: "Predict a species",
      img: homePage,
      description: `I built this application to gain some insight into using Redux and building a full stack app to predict a species type based on its dimensions using a machine learning model.
The application takes in information from sliders and uses the machine learning model to predict the species
In order to have access to the APIs for the machine learning model, you must login to your account (access to APIs are restricted to authenticated users).   
Users have the option to change their password in the password change endpoint. 
The backend for this was built in Python and Django, while the frontend was made in React and Redux
The tools/technologies that I used include:
  Python
  Django
  React
  Redux`,
      github: "https://github.com/AmanShah-11/django_api_google_cloud/",
    },
    {
      title: "Study App",
      subtitle: "Transcribe videos for studying!",
      img: learnImg,
      description: `This was our project submission for Hack The North 2020!
Our app allows the user to upload a .mp3 file and then input a "keyword". The video will then be transcribed into a script and then the timestamp associated with the word will then be outputted to the application.

I created the Google Cloud Project, associated bucket and scripts to automatically upload files to the cloud and then have those videos transcribed

Additionally, I created the backend API was created using Django and Django Rest Framework to make API calls to Google Cloud, specifically the Google Speech to Text APIs and calls to upload the .mp3 file to a bucket in google cloud (if the file is longer than 1 minute long then google requires it to be placed in the bucket).

Here's a demo of how our project works!`,
      github: "https://github.com/AmanShah-11/django_api_google_cloud/",
    },
  ];

  return (
    <>
      <ProjectModal
        showModal={showModal}
        handleClose={handleClose}
        data={data[dataindex]}
      />
      <ServicesContainer id="projects">
        <ServicesH1>My Projects</ServicesH1>
        <ServicesWrapperProject>
          <ServicesCard onClick={() => handleShow(0)}>
            <ServicesIcon src={Icon4} />
            <ServicesH2>Automatic Event Scheduler</ServicesH2>
            <ServicesP>
              Event Scheduler that adds to your Google Calendar automatically
            </ServicesP>
          </ServicesCard>
          <ServicesCard onClick={() => handleShow(1)}>
            <ServicesIcon src={Icon5} />
            <ServicesH2>Facial Recognition System</ServicesH2>
            <ServicesP>
              Login to your system using facial recognition!
            </ServicesP>
          </ServicesCard>
          <ServicesCard onClick={() => handleShow(2)}>
            <ServicesIcon src={Icon6} />
            <ServicesH2>Bank Loan Approval System</ServicesH2>
            <ServicesP>See if you would be approved for a bank loan!</ServicesP>
          </ServicesCard>
          <ServicesCard onClick={() => handleShow(3)}>
            <ServicesIcon src={Icon10} />
            <ServicesH2>Species Prediction Model</ServicesH2>
            <ServicesP>Predict a species</ServicesP>
          </ServicesCard>
          <ServicesCard onClick={() => handleShow(4)}>
            <ServicesIcon src={studyImg} />
            <ServicesH2>Study App</ServicesH2>
            <ServicesP>Transcribe your videos for easier studying!</ServicesP>
          </ServicesCard>
        </ServicesWrapperProject>
      </ServicesContainer>
    </>
  );
};

export const Projects = () => {
  const [showModal, setShowModal] = useState(false);

  const [dataindex, setDataIndex] = useState(0);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleShow = (index) => {
    setDataIndex(index);
    setShowModal(true);
  };

  const data = [
    {
      title: "Work Experience - Sonero",
      subtitle: "Jan 2022 - Apr 2022 | Full Stack Software Developer Intern",
      img: soneroImg,
      description: `At Sonero, I spent my time developing on both the frontend (React) and backend (Python and Django). \n
I spent a lot of my time spearheading a calendar integration workflow that would allow our meeting bot to automatically join meetings in someone's online calendar. \n
Additionally, I spent time creating the automatic logging of metrics and metric tables in Django and React \n
Finally I created a feature that allowed our meeting bot to instantly join meetings using AWS and Python.`,
      github: "https://sonero.ai//",
    },
    {
      title: "Work Experience - 4GL",
      subtitle: "May 2021 - Aug 2021 | Full Stack Software Developer Intern",
      img: fourglImg,
      description: `At Sonero, I spent my time developing on both the frontend (React) and backend (Python and Django). \n
I spent a lot of my time spearheading a calendar integration workflow that would allow our meeting bot to automatically join meetings in someone's online calendar. \n
Additionally, I spent time creating the automatic logging of metrics and metric tables in Django and React \n
Finally I created a feature that allowed our meeting bot to instantly join meetings using AWS and Python.`,
      github: "https://4glsol.com/",
    },
    {
      title: "Work Experience - Polar",
      subtitle: "Sep 2020 - Dec 2020 | Software Developer Intern",
      img: polarImg,
      description: `At 4GL, I spent my time developing on both the frontend (React) and backend (Python and Django). \n
I developed 10 interface screens in React with asynchronous CRUD and validation used by 100+ clients \n
Also, spearheaded multiprocessing development and optimized Oracledatabase calls to JSON↔excel converters creating Django models 60% faster and reducing memory usage by 70% \n
I created scalable modals and customized components implemented throughout codebase in React and Bootstrap \n
50+ models, viewsets, serializers and endpoints were transitioned from Oracle db to Django through Docker \n
15+ pre save and post delete signals were created by me for resequencing, validation and updating values in Django \n
Finally, I led pair programming sessions and engaged in code reviews to ensure optimized code and proper code coverage`,
      github: "https://www.createwithpolar.com/",
    },
    {
      title: "Work Experience - CAA",
      subtitle: "Jan 2020 - Apr 2020 | Software Developer Intern",
      img: caaImg,
      description: `Scraped Glassdoor reviews using self-developed webscraper in Python and Selenium to track employee reviews \n
Generated Deep Learning Topic Modelling Model using Python and Scipy to display popular trends and topics \n
Developed automated directory sorting and storage, and a weekly email script of reports`,
      github: "https://www.caa.ca/",
    },
  ];

  return (
    <>
      <ProjectModal
        showModal={showModal}
        handleClose={handleClose}
        data={data[dataindex]}
      />
      <ProjectsContainer id="work">
        <ProjectsH1>Work Experience</ProjectsH1>
        <ServicesWrapper>
        <ServicesCard onClick={() => handleShow(0)}>
            <ServicesIcon src={Icon11} />
            <ServicesH2>Sonero</ServicesH2>
            <ServicesP>Full Stack Software Developer Intern</ServicesP>
          </ServicesCard>
          <ServicesCard onClick={() => handleShow(1)}>
            <ServicesIcon src={Icon7} />
            <ServicesH2>4GL</ServicesH2>
            <ServicesP>Full Stack Software Developer Intern</ServicesP>
          </ServicesCard>
          <ServicesCard onClick={() => handleShow(2)}>
            <ServicesIcon src={Icon8} />
            <ServicesH2>Polar</ServicesH2>
            <ServicesP>Software Developer Intern</ServicesP>
          </ServicesCard>
          <ServicesCard onClick={() => handleShow(3)}>
            <ServicesIcon src={Icon9} />
            <ServicesH2>CAA</ServicesH2>
            <ServicesP>Software Developer Intern</ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ProjectsContainer>
    </>
  );
};

export default Services;

// I built this application to gain some insight into using Redux and building a full stack app to predict a species type based on its dimensions using a machine learning model.
// The application takes in information from sliders and uses the machine learning model to predict the species
// In order to have access to the APIs for the machine learning model, you must login to your account (access to APIs are restricted to authenticated users).
// Users have the option to change their password in the password change endpoint.
// The backend for this was built in Python and Django, while the frontend was made in React and Redux
// The tools/technologies that I used include:
//   Python
//   Django
//   React
//   Redux
