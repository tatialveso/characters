import { useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"

function EditCharacter() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = (e) => {
        
    }

    const handleSubmit = () => {
        
    }

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Editar personagem
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar personagem</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Nome do personagem</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Ocupação</Form.Label>
                            <Form.Control
                                type="text"
                                name="occupation"
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Arma do personagem</Form.Label>
                            <Form.Control
                                type="text"
                                name="weapon"
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Button type="submit">Cadastrar</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default EditCharacter