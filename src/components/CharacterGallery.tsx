import {Character} from "../model/Character";
import CharacterCard from "./CharacterCard";
import "./CharacterGallery.css"

type CharacterGalleryProps = {
    characters : Character[];
}

// Bekommt Characters und gibt einzelne Characters an die CharacterCard weiter
export default function CharacterGallery(props : CharacterGalleryProps){

    return (
        <div className={"cards"}>
            {props.characters.map( (character) =>
                <div className={"card"}>
                    <CharacterCard character={character} />
                </div>)}
        </div>
    )


}