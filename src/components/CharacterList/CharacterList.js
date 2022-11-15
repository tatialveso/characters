import axios from "axios"
import { useEffect, useState } from "react"
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap"
import { Link } from "react-router-dom"

function CharacterList({ apiURL, characters, setCharacters }) {
    const [fetching, setFetching] = useState(true)

    useEffect(() => {
        axios.get(apiURL)
            .then(response => {
                setCharacters(response.data)
                setFetching(false)
            })
            .catch(error => console.log(error))
    }, [])



    const renderCharacters = characters.map((character) => {
        return (
            <Col key={character.id}>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title className="m-0">
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
                {fetching && <Spinner animation="border" />}
                {renderCharacters}
            </Row>
        </Container>
    )
}

export default CharacterList