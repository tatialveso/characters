import axios from "axios"
import { useEffect, useState } from "react"
import { Button, Col, Container, Row, Spinner } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import EditCharacter from '../EditCharacter/EditCharacter'

function CharacterDetails({ apiURL, form, setForm }) {
    const [character, setCharacter] = useState({})
    const [fetching, setFetching] = useState(true)
    const navigate = useNavigate()
    const { id } = useParams()


    useEffect(() => {
        axios.get(`${apiURL}/${id}`)
            .then(response => {
                setCharacter(response.data)
                setFetching(false)
            })
            .catch(error => console.log(error))
    }, [id])

    const deleteCharacter = async (id) => {
        await axios.delete(`${apiURL}/${id}`)

        navigate("/")
    }

    return (
        <Container>
            {fetching && <Spinner animation="border" />}
            <h1 className="my-5">{character.name}</h1>
            <Row>
                <Col className="text-center">
                    <p><b>Ocupação:</b> {character.occupation}</p>
                    <p><b>Weapon:</b> {character.weapon}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditCharacter form={form} setForm={setForm} id={id} apiURL={apiURL} />
                </Col>
                <Col>
                    <Button variant="danger" onClick={() => deleteCharacter(character.id)}>Excluir personagem</Button>
                </Col>
            </Row>
            <Button variant="light" className="mt-5 fw-bold" onClick={() => navigate(-1)}>Voltar</Button>
        </Container>
    )
}

export default CharacterDetails