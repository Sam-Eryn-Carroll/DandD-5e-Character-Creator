import './ClassList.css'

export default function ClassList({classes, handleChange, newCharacterData, name, handleNameChange}) {
    const classesUI = classes.map(classEl => {
        return <li key={classEl.index} onClick={() => handleChange('charClass', classEl.index)}>{classEl.name}</li>
    })

    return (
        <main>
            <label>Name</label>
            <input type="text" name="name" value={newCharacterData.name} onChange={handleNameChange}></input>
            <label>Level</label>
            <input type="number" name="level" min={1} max={20} value={newCharacterData.level} onChange={handleNameChange} ></input>
            <ul className="ClassList" >
                {classesUI}
            </ul>
        </main>
    )
}