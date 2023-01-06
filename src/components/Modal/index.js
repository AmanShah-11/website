import { Button, Modal, ModalBody } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.css";
import img from "../../images/4gl_sol.jpg";

import React, { useState } from "react";
import {
  CustomModalBody,
  CustomModalHeader,
  CustomModalTitle,
  CustomModalSubTitle,
  Img,
} from "./ModalElements";

const ProjectModal = ({ showModal, handleClose, data }) => {
  const { title, description, github, subtitle, img } = data;
  return (
    <>
      <Modal
        // size="lg"
        // scrollable={true}
        show={showModal}
        onHide={handleClose}
        keyboard={false}
      >
        <CustomModalHeader>
          <CustomModalTitle>{title}</CustomModalTitle>
          <CustomModalSubTitle>{subtitle}</CustomModalSubTitle>
        </CustomModalHeader>
        <CustomModalBody
          scrollable={true}
          bsPrefix="modal-title"
          dialogClassName="modalbody"
        >
          <Img src={img} alt="abc" className="img-fluid" />
          {description}
        </CustomModalBody>
        <Modal.Footer>
          <FaGithub />
          <a href={github}>Link to website</a>
          <Button variant="btn btn-danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProjectModal;
