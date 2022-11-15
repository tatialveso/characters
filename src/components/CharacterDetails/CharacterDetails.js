import { Button, Col, Container, Row } from "react-bootstrap"
import EditCharacter from '../EditCharacter/EditCharacter'

function CharacterDetails() {
    return (
        <Container>
            <h1 className="my-5"></h1>
            <Row>
                <Col className="text-center">
                    <p><b>Ocupação:</b></p>
                    <p><b>Weapon:</b></p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditCharacter />
                </Col>
                <Col>
                    <Button variant="danger">Excluir personagem</Button>
                </Col>
            </Row>
            <Button variant="light" className="mt-5 fw-bold">Voltar</Button>
        </Container>
    )
}

export default CharacterDetails