import React from "react";
import emailjs from '@emailjs/browser';
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"

export default function Contact() {
    const form = React.useRef();
    const [showSuccessModal, setShowSuccessModal] = React.useState(false);
    const [showFailModal, setShowFailModal] = React.useState(false);
    const handleCloseSuccess = () => {
        setShowSuccessModal(false);
        form.current.reset();
    };
    const handleCloseFail = () => {
        setShowFailModal(false);
        form.current.reset();
    };
    const handleShowSuccess = () => setShowSuccessModal(true);
    const handleShowFail = () => setShowFailModal(true);
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_73jl2co', 
            'template_a4w7ufq', 
            form.current, 
            'ZuXebhaKSoQqUBTHY'
        )
        .then((result) => {
            console.log(result);
            result.text==="OK" && handleShowSuccess();
        }, (error) => {
            handleShowFail()
        });
    };

    return (
        <div id="contact">
            <h3>Contact Me</h3>
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
            <Modal show={showSuccessModal} onHide={handleCloseSuccess}>
                <Modal.Body>Message successfully sent!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseSuccess}>Close</Button>
                </Modal.Footer>
            </Modal>
            <Modal show={showFailModal} onHide={handleCloseFail}>
                <Modal.Body>Problem occured while sending the message. Why don't you send me an email?</Modal.Body>
                <Modal.Footer>
                    <a href="mailto:csAfter40@gmail.com"><Button variant="primary">Send email!</Button></a>
                    <Button variant="secondary" onClick={handleCloseFail}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>

    );
}