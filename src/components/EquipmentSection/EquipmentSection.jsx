import './EquipmentSection.css';

export default function EquipmentSection({equipmentNames}) {
    return (
        <main>
            <ul className='EquipmentSection'>
                {equipmentNames}
            </ul>
        </main>
    )
}