import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import React from 'react';

export default function CarouselModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.project.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Carousel data-bs-theme="dark">
                    {props.project.detailPictures.map((picture, i)=>{
                        return (
                            <Carousel.Item key={i}>
                                <img
                                    className="d-block w-100 carousel-modal-image"
                                    src={picture}
                                    alt=""
                                />
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}