import React, {useEffect, useState} from 'react';
import './App.css';
import CharacterGallery from "./components/CharacterGallery";
import axios from "axios";

export default function App() {

    const [characters, setCharacters] = useState([]);


    useEffect(() => {

        console.log("Calling API, when component was rendered the first time (=mounted) ")
        axios.get("https://rickandmortyapi.com/api/character")
            .then((response) => {
                return response.data
            })
            .then((data) => {
                setCharacters(data.results)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [])

    return (
        <div>
            <CharacterGallery characters={characters} />
        </div>
    );
}
