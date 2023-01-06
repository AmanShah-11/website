import styled from "styled-components";
import { Modal } from "react-bootstrap";

export const CustomModalBody = styled(Modal.Body)`
  white-space: pre-wrap;
  font-size: 1.1rem;
  font-weight: 500;
  padding: 1rem;
  display: block;
  text-indent: 0px;
`;

export const CustomModalHeader = styled(Modal.Header)`
  justify-content: left;
  text-align: left;
  display: block;
`;

export const CustomModalTitle = styled(Modal.Title)`
  font-size: 1.75rem;
  text-align: left;
  color: #000;
  font-weight: bold;
`;

export const CustomModalSubTitle = styled(Modal.Title)`
  font-size: 1.25rem;
  text-align: left;
  color: #000;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
