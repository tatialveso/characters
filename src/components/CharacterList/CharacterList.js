import axios from "axios"
import { useEffect, useState } from "react"
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

function CharacterList({ apiURL }) {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        axios.get(apiURL)
            .then(response => {
               setCharacters(response.data)
            })
            .catch(error => console.log(error))
    }, [])

    const renderCharacters = characters.map((character) => {
        return (
            <Col key={character.id}>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>
                            <Link className="nav-link" to={`/personagem/${character.id}`}>{character.name}</Link>
                        </Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        )
    })

    return (
        <Container>
            <Row>
                <Button variant="info" className="my-3">
                    <Link className="nav-link" to="/cadastrar">Cadastrar</Link>
                </Button>
            </Row>
            <Row className="d-flex justify-content-center">
                { renderCharacters }
            </Row>
        </Container>
    )
}

export default CharacterList