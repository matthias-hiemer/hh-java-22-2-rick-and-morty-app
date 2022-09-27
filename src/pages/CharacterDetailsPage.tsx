import {Link, useParams} from "react-router-dom";
import {Character} from "../model/Character";
import "./CharacterDetailsPage.css"

export type CharacterDetailsPageProps = {
    characters: Character[]
}

export default function CharacterDetailsPage(props: CharacterDetailsPageProps) {
    
    // get the id from URL
    const params = useParams()
    const id = params.id

    if (id === undefined) {
        return (<>Character not found!</>);
    }

    // Find the character by id
    const character = props.characters.find(character => character.id === parseInt(id))

    // Check if character was found
    if (character === undefined) {
        return (<>Character not found!</>)
    }

    return (
        <div className={"detail"}>
            <Link to={"/"}>❮ Back</Link>
            <h1>Character</h1>
            <h2>{character.name}</h2>
            <p>Status: {character.status}</p>
            <img src={character.image} alt={"Character avatar"} />

        </div>
    )
}
