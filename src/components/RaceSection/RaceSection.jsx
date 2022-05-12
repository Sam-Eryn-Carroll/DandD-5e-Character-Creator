import { useEffect, useState } from 'react'
import * as dungeonsAPI from '../../utilities/dandd-api';
import './RaceSection.css'

export default function RaceSection({races, handleChange, proficiencies, languages, handleMultiChange}) {
    const racesUI = races.map(raceEl => {
        return <li key={raceEl.index} onClick={() => handleChange('race', raceEl.index)}>{raceEl.name}</li>
    })
    const proficienciesUI = proficiencies.map(proficienciesEl => {
        return <li key={proficienciesEl.index} onClick={() => handleChange('proficiencies', proficienciesEl.index)}>{proficienciesEl.name}</li>
    })
    const languagesUI = languages.map(languageEl => {
        return <li key={languageEl.index} onClick={() => handleChange('languages', languageEl.index)}>{languageEl.name}</li>
    })
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
        </main>
    )
}