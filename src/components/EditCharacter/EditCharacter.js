import axios from "axios"
import { useEffect, useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

function EditCharacter({ form, setForm, apiURL, id }) {
    const navigate = useNavigate()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        axios.get(`${apiURL}/${id}`)
            .then(response => setForm(response.data))
    }, [])

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await axios.put(`${apiURL}/${id}`, form)

            setShow(false)
            navigate("/")
        } catch (error) {
            console.log(error)
        }

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
                                value={form.name}
                                placeholder=""
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Ocupação</Form.Label>
                            <Form.Control
                                type="text"
                                name="occupation"
                                onChange={handleChange}
                                value={form.occupation}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Arma do personagem</Form.Label>
                            <Form.Control
                                type="text"
                                name="weapon"
                                onChange={handleChange}
                                value={form.weapon}
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