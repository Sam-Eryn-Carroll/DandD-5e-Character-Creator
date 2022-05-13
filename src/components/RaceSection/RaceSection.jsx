import { useEffect, useState } from 'react'
import * as dungeonsAPI from '../../utilities/dandd-api';
import './RaceSection.css'

export default function RaceSection({races, handleChange, proficiencies, languages, handleMultiChange, languageChoice, proficienciesChoice, traits, handleNameChange, newCharacterData}) {

    const [languageSelection, setLanguageSelection] = useState([])
    const [proficiencySelection, setProficiencySelection] = useState([])
    const [traitSelection, setTraitSelection] = useState([])

    useEffect(function() {
        handleChange('languages', languageSelection)
    }, [languageSelection])

    useEffect(function() {
            handleChange('proficiencies', proficiencySelection)
    }, [proficiencySelection])

    useEffect(function() {
        setLanguageSelection([])
        setProficiencySelection([])
    }, [newCharacterData.race])
    

    const racesUI = races.map(raceEl => {
        return <li key={raceEl.index} onClick={() => handleChange('race', raceEl.index)}>{raceEl.name}</li>
    })
    const proficienciesUI = proficiencies.map(proficiencyEl => {
         return <li key={proficiencyEl.index} onClick={() => handleProficiencyClick(proficiencyEl.name)}>{proficiencyEl.name}</li>
    })
    const languagesUI = languages.map(languageEl => {
        return <li key={languageEl.index} onClick={() => handleLanguageClick(languageEl.name)}>{languageEl.name}</li>
    })
    
    const traitsUI = traits.map(traitEl => {
        return <li key={traitEl.index}>{traitEl.name}</li>
    })
    

    function handleLanguageClick(language) {
        if (languageSelection.includes(language)) {
            const languageCopy = [...languageSelection]
            languageCopy.splice(languageCopy.indexOf(language), 1)
            setLanguageSelection(languageCopy)
        } else if (languageSelection.length < languageChoice) {
            const languageCopy = [...languageSelection]
            languageCopy.push(language)
            setLanguageSelection(languageCopy)
        }
    }

    function handleProficiencyClick(proficiency) {
        if (proficiencySelection.includes(proficiency)) {
            const proficiencyCopy = [...proficiencySelection]
            proficiencyCopy.splice(proficiencyCopy.indexOf(proficiency), 1)
            setProficiencySelection(proficiencyCopy)
        } else if (proficiencySelection.length < proficienciesChoice){
            const proficiencyCopy = [...proficiencySelection]
            proficiencyCopy.push(proficiency)
            setProficiencySelection(proficiencyCopy)
        }
    }

    
    
    return (
        <main>
            <ul className="RaceSection">
            {racesUI}
            </ul>
            <ul className="RaceSection">
            {proficienciesUI}
            </ul>
            <ul className='RaceSection'>
                {languagesUI}
            </ul>
            <ul className='RaceSection'>
                {traitsUI}
            </ul>
        </main>
    )
}