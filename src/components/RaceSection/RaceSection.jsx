import { useEffect, useState } from 'react'
import * as dungeonsAPI from '../../utilities/dandd-api';
import './RaceSection.css'

export default function RaceSection({races, handleChange, name}) {
    const racesUI = races.map(raceEl => {
        return <li key={raceEl.index} onClick={() => handleChange('race', raceEl.index)}>{raceEl.name}</li>
    })
    return (
        <main>
            <ul className="RaceSection">
            {racesUI}
            </ul>
        </main>
    )
}