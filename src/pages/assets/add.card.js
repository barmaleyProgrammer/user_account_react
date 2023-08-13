import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddCard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Додати картку
            </Button>

            <Modal show={show} onHide={handleClose}>
                {/*<Modal.Header closeButton>*/}
                {/*    <Modal.Title>Modal heading</Modal.Title>*/}
                {/*</Modal.Header>*/}
                <Modal.Body>
                    <input className="inp-card" placeholder="введіть номер картки"/><br/><br/>
                    <input className="pin" placeholder="введіть пін"/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Додати
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Скасувати
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddCard;