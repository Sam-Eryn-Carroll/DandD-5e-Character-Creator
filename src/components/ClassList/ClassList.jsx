import './ClassList.css'

export default function ClassList({classes, handleChange, name}) {
    const classesUI = classes.map(classEl => {
        return <li key={classEl.index} onClick={() => handleChange('charClass', classEl.index)}>{classEl.name}</li>
    })
    return (
        <main>
            <label>Name</label>
            <input type="text" onClick={() => handleChange('name', name)}></input>
            <ul className="ClassList" >
                {classesUI}
            </ul>
        </main>
    )
}