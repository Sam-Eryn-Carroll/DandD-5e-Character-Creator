import { specificRace } from '../../utilities/dandd-api'
import './RaceSection.css'

export default function RaceSection({raceNames, activeRace, setActiveRace, specificRaceData}) {
    
    return (
        <main>
            <ul className="RaceSection">
            {raceNames}
            </ul>
            <ul>{specificRaceData}</ul>
            
        </main>
    )
}