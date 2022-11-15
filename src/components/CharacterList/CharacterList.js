import { Button, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

function CharacterList() {
    return (
        <Container>
            <Row>
                <Button variant="info" className="my-3">
                    <Link className="nav-link" to="/cadastrar">Cadastrar</Link>
                </Button>
            </Row>
            <Row className="d-flex justify-content-center">
                
            </Row>
        </Container>
    )
}

export default CharacterList