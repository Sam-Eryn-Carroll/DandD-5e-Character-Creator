import './ClassList.css'

export default function ClassList({classNames}) {
    return (
        <main>
            <ul className="ClassList">
                {classNames}
            </ul>
        </main>
    )
}