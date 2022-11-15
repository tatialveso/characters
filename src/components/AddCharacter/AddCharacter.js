import { Button, Container, Form } from "react-bootstrap"

function AddCharacter() {
    const handleChange = () => {
        
    }

    const handleSubmit = () => {

    }

    return (
        <Container>
            <Form onSubmit={ handleSubmit }>
                <Form.Group className="mb-3">
                    <Form.Label>Nome do personagem</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Insira o nome do personagem"
                        name="name"
                        onChange={ handleChange }
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Ocupação</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Insira a ocupação do personagem"
                        name="occupation"
                        onChange={ handleChange }
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Arma do personagem</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Insira a arma do personagem"
                        name="weapon"
                        onChange={ handleChange }
                    />
                </Form.Group>
                <Button type="submit">Cadastrar</Button>
            </Form>
        </Container>
    )
}

export default AddCharacter