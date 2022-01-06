import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MyModal(props) {
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <h3>{props.heading}</h3>
          <h5>{props.titleone}</h5>
          <img
            style={{ width: "100%" }}
            src={props.imgone}
            alt={props.altone}
          />
          <h5>{props.titletwo}</h5>
          <img
            style={{ width: "100%" }}
            src={props.imgtwo}
            alt={props.alttwo}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default MyModal;
