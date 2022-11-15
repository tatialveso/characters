import axios from "axios"
import { useEffect, useState } from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import EditCharacter from '../EditCharacter/EditCharacter'

function CharacterDetails({ apiURL, form, setForm }) {
    const [character, setCharacter] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        // https://ih-crud-api.herokuapp.com/characters/1
        axios.get(`${apiURL}/${id}`)
            .then(response => {
                setCharacter(response.data)
            })
            .catch(error => console.log(error))
    }, [])

    const deleteCharacter = async (id) => {
        await axios.delete(`${apiURL}/${id}`)

        console.log("Personagem excluído")
        navigate("/")
    }

    return (
        <Container>
            <h1 className="my-5">{ character.name }</h1>
            <Row>
                <Col className="text-center">
                    <p><b>Ocupação: </b>{ character.occupation }</p>
                    <p><b>Arma: </b>{ character.weapon }</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditCharacter id={ id } apiURL={ apiURL } form={ form } setForm={ setForm } />
                </Col>
                <Col>
                    <Button variant="danger" onClick={() => deleteCharacter(character.id)}>Excluir personagem</Button>
                </Col>
            </Row>
            <Button variant="light" className="mt-5 fw-bold" onClick={() => navigate(-1) }>Voltar</Button>
        </Container>
    )
}

export default CharacterDetails

// props passa de pai pra filho
    // APP.JS
        // DETAILS.JS
            // EDIT.JS