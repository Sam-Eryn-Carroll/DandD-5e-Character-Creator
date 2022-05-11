import './NewCharacter.css'
import * as dungeonsAPI from '../../utilities/dandd-api';
import { useEffect, useState, useRef } from 'react';
import RaceSection from '../../components/RaceSection/RaceSection';
import ClassList from '../../components/ClassList/ClassList';
import LevelSection from '../../components/LevelSection/LevelSection';
import AbilityScoreSection from '../../components/AbilityScoreSection/AbilityScoreSection';
import CharacterDescription from '../../components/CharacterDescription/CharacterDescripton';
import EquipmentSection from '../../components/EquipmentSection/EquipmentSection';

export default function NewCharacter() {
    const [classes, setClasses] = useState([]);
    const [races, setRaces] = useState([]);
    const [name, setName] = useState([])
    const [newCharacterData, setNewCharacterData] = useState({
        name: '',
        charClass: '',
        race: '',
        level: 0
    });
    
    useEffect(function() {

        async function getClassesData() {
            const classes = await dungeonsAPI.getClasses();
            setClasses(classes.results);
        }
        getClassesData();

        async function getRacesData() {
            const races = await dungeonsAPI.getRaces();
            setRaces(races.results);
        }
        getRacesData()
        
    }, []);
   
    function handleChange(propToChange, value) {
        console.log(propToChange, value)
        setNewCharacterData({
            ...newCharacterData, 
            [propToChange]: value
        })
    }
    return (
        <main className='NewCharacter'>
            <aside>
                <ClassList classes={classes} handleChange={handleChange}/>
                <RaceSection races={races} handleChange={handleChange} />
            </aside>
            <section id="AbilitySection">
                
            </section>
            <section id="CharacterDescription">
                
            </section>
            <section>
                
            </section>
        </main>
    );
}