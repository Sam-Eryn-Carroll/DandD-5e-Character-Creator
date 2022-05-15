import './ClassList.css'

export default function ClassList({classes, handleChange}) {
    const classesUI = classes.map(classEl => {
        return <li key={classEl.index} onClick={() => handleChange('charClass', classEl.index)}>{classEl.name}</li>
    })

    return (
        <main>
            
            <ul className="ClassList" >
                {classesUI}
            </ul>
        </main>
    )
}