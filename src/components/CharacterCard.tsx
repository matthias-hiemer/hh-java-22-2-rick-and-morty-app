import {Character} from "../model/Character";
import "./CharacterCard.css"

type CharacterCardProps = {
    character: Character;
}

// Stellt einen einzelnen Character dar
export default function CharacterCard(props: CharacterCardProps){

    return <div className={"character-card"}>
        <h3>{props.character.name}</h3>
        <img src={props.character.image}  alt={"Character Avatar"}/>
        <p>{props.character.status}</p>
    </div>
}