
import * as dungeonsAPI from '../../utilities/dandd-api';
import './RaceSection.css'

export default function RaceSection({races, handleChange, proficiencies, languages, languageChoice, proficienciesChoice, traits, newCharacterData}) {

    
    

    const racesUI = races.map(raceEl => {
        return <li className={raceEl.index === newCharacterData.race ? 'active' : ''}  key={raceEl.index} onClick={() => handleChange('race', raceEl.index)}>{raceEl.name}</li>
    })
    
    

    

    
    
    return (
        <main>
            <ul className="RaceSection">
            {racesUI}
            </ul>
        </main>
    )
}