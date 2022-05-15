import './RaceDetails.css'
import { useEffect, useState } from 'react'

export default function RaceDetails({races, handleChange, proficiencies, languages, languageChoice, proficienciesChoice, traits, newCharacterData}) {
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

    const proficienciesUI = proficiencies.map(proficiencyEl => {
        return <li className={proficiencyEl.index === newCharacterData.proficiencies ? 'active' : ''}  key={proficiencyEl.index} onClick={() => handleProficiencyClick(proficiencyEl.name)}>{proficiencyEl.name}</li>
    })
    const languagesUI = languages.map(languageEl => {
       return <li className={languageEl.name === newCharacterData.languages ? 'active' : ''}  key={languageEl.index} onClick={() => handleLanguageClick(languageEl.name)}>{languageEl.name}</li>
    })
   
    const traitsUI = traits.map(traitEl => {
       return <li className="RaceTraitsList" key={traitEl.index}>{traitEl.name}</li>
    })

    function handleLanguageClick(language) {
        if (languageSelection.includes(language)) {
            const languageCopy = [...languageSelection]
            languageCopy.splice(languageCopy.indexOf(language), 1)
            setLanguageSelection(languageCopy)
    }   else if (languageSelection.length < languageChoice) {
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
    function proficienciesList() {
        if (proficiencies.length === 0) {
            return null
        } else {
            return <h5>Proficiencies</h5>
        }
    }

    function languageList() {
        if (languages.length === 0) {
            return null 
        } 
        if (languageChoice === 1) {
            return (
                <h5>Choose One Language</h5>
            )
        } 
        
    }

    function TraitList() {
        if (traits.length === 0) {
            return null
        } else {
            return <h5>Traits</h5>
        }
    }

    return (
        <main className="RaceDetails">
            {proficienciesList()}
            <ul className='RaceProficiencies'>
                {proficienciesUI}
            </ul>
            {languageList()}
            <ul className='RaceLanguages'>
                {languagesUI}
            </ul>
            {TraitList()}
            <ul className="RaceTraits">
                {traitsUI}
            </ul>
        </main>
    )
}