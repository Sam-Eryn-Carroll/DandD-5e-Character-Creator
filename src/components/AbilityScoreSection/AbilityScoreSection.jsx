import './AbilityScoreSection.css'

export default function AbilityScoreSection({abilityScoreNames}) {
    return (
        <main>
            <ul className="AbilityScoreSection">
                {abilityScoreNames}
            </ul>
        </main>
    )
}