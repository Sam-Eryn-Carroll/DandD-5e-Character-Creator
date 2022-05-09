import './CharacterDescription.css'

export default function CharacterDescription({alignmentNames, languageNames}) {
    return (
        <main>
            <ul className="CharacterDescription" id="alignment">
                {alignmentNames}
            </ul>
            <ul className="CharacterDescription" id="language">
                {languageNames}
            </ul>
        </main>
    )
}