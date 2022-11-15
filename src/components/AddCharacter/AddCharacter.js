import axios from "axios"
import { Button, Container, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

function AddCharacter({ apiURL, form, setForm }) {
    const navigate = useNavigate()

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await axios.post(apiURL, form)
            console.log("Cadastro feito!")
            navigate("/")
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Nome do personagem</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Insira o nome do personagem"
                        name="name"
                        onChange={handleChange}
                        value={form.name}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Ocupação</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Insira a ocupação do personagem"
                        name="occupation"
                        onChange={handleChange}
                        value={form.occupation}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Arma do personagem</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Insira a arma do personagem"
                        name="weapon"
                        onChange={handleChange}
                        value={form.weapon}
                    />
                </Form.Group>
                <Button type="submit">Cadastrar</Button>
            </Form>
        </Container>
    )
}

export default AddCharacter