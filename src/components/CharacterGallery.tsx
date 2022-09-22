import {Character} from "../model/Character";
import CharacterCard from "./CharacterCard";
import "./CharacterGallery.css"
import {useState} from "react";


type CharacterGalleryProps = {
    characters : Character[];
}

// Bekommt Characters und gibt einzelne Characters an die CharacterCard weiter
export default function CharacterGallery(props : CharacterGalleryProps){

    const [filterText, setFilterText] = useState("")
    const filteredCharacters = props.characters.filter( (char) => char.name.toLowerCase().includes(filterText.toLowerCase()))

    return (
        <>
            <input onChange={(event) => setFilterText(event.target.value)} />

            <p>Typed in: {filterText}</p>
            <div className={"cards"}>
                {filteredCharacters.map((character) =>
                    <div className={"card"}>
                        <CharacterCard character={character} />
                    </div>)}
            </div>
        </>
    )


}