import React, { Component, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { TicketForm } from './TicketForm';

const NewTicketModal = ({onClose}) => {
    const [isOpen, setIsOpen] = useState(false);

    
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        onClose();
    }
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                + New Ticket
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <TicketForm onSubmit={handleClose}/>
                </Modal.Body>
            </Modal>
        </div>
    );


};

export default NewTicketModal;