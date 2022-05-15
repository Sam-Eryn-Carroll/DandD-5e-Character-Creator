import './BasicInfo.css'

export default function BasicInfo({newCharacterData, handleNameChange}) {
    return (
        <main className="BasicInfo">
            <label>Name</label>
            <input type="text" name="name" value={newCharacterData.name} onChange={handleNameChange}></input>
            <label>Level</label>
            <input type="number" name="level" min={1} max={20} value={newCharacterData.level} onChange={handleNameChange} ></input>
        </main>
    )
}