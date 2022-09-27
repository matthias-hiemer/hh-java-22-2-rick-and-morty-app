import React, {useEffect, useState} from 'react';
import './App.css';
import CharacterGallery from "./components/CharacterGallery";
import axios from "axios";

export default function App() {

    const [characters, setCharacters] = useState([]);

    // Auruf mit useEffect: Bitte keine Endlosschleife!
    // (Wenn sich der state hier ändert, dann ist das okay, bitte render nicht ständig neu)
    useEffect(() => {

        axios.get("https://rickandmortyapi.com/api/character")
            .then((response) => { return response.data })  // Hole den Body der Response (in unserem Fall das JSON).
            .then((data) => {     setCharacters(data.results) })   // Setze in unseren Character State: von dem Body was im Attribut "results" steht
            .catch((error) => {   console.error(error)   })

        // [] = führe den Inhalt beim ersten Laden der Seite aus
    }, [])
    
    return (
        <div>
            <CharacterGallery characters={characters} />
        </div>
    );
}
